import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import { Account, Profile } from 'next-auth';
import { API } from '@/src/structs/API';
import { StatusCodes } from 'http-status-codes';

import type { AuthOptions, Awaitable, User, Session } from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import type { AdapterUser } from 'next-auth/adapters';

/**
 * Authenticate the user against our database.
 *
 * Auth0 recommends that a pre-existing provider is used to authenticate users,
 * such as Google, Twitter, etc. However, we may also implement our own database
 * to authenticate users.
 *
 * `authorize` will call our backend to authenticate the user.
 * @param credentials The credentials provided by the user.
 * @param req The request object.
 * @returns The user object if the user is authenticated, otherwise `null`.
 */
async function authorize(
  credentials: Record<'email' | 'password', string> | undefined,
  req: any
): Promise<User | null> {
  const result = await API.Post('user/signin', {
    email: credentials?.email,
    password: credentials?.password,
  });

  // If the response is not successful, we'll return `null` to indicate that
  // the user is not authenticated.
  return result.success ? result.data.user : null;
}

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: 'credentials',
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in
      // page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'text' },
      },
      authorize,
    }),

    GoogleProvider({
      id: 'google',
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  session: {
    maxAge: 60 * 60 * 24 * 30,
  },

  pages: {
    newUser: '/auth/signup',
    signIn: '/auth/signin',
    error: '/auth/error',
  },

  callbacks: {
    jwt: (params: {
      token: JWT;
      user?: User | AdapterUser;
      account?: Account | null;
      profile?: Profile;
      isNewUser?: boolean;
    }): Awaitable<JWT> => {
      return params.token;
    },

    async signIn(params: {
      user: User | AdapterUser;
      account: Account | null;
      profile?: Profile | undefined;
      email?: { verificationRequest?: boolean | undefined } | undefined;
      credentials?: any | undefined;
    }): Promise<boolean> {
      if (params.account?.provider === 'google') {
        const result = await API.Post('user/signup', { ...params.user, method: 'GOOGLE' });

        if (result.success || result.code === StatusCodes.CONFLICT) {
          return true;
        } else {
          throw new Error('Failed to sign in through Google, please try again later.');
        }
      }

      return true;
    },

    session: async (params: {
      session: Session;
      user: User | AdapterUser;
      token: JWT;
    }): Promise<Session> => {
      return params.session;
    },
  },
};

export default NextAuth(authOptions);
