import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import DiscordProvider from 'next-auth/providers/discord';
import GoogleProvider from 'next-auth/providers/google';

import { API } from '@/structs/API';
import { prisma } from '@/util/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { StatusCodes } from 'http-status-codes';

import type { AuthOptions, User } from 'next-auth';

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
  const response = await API.Post<any>({
    endpoint: 'api/user/signin',
    data: {
      email: credentials?.email,
      password: credentials?.password,
    },
  });

  if (!response.ok && response.status === StatusCodes.CONFLICT) {
    throw new Error('Please sign in using the original method you used to create your account.');
  } else if (!response.ok) {
    return null;
  }

  // If the response is not successful, we'll return `null` to indicate that
  // the user is not authenticated.
  return (response as any).data!;
}

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
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
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    DiscordProvider({
      id: 'discord',
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],

  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30,
  },

  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
};

export default NextAuth(authOptions);
