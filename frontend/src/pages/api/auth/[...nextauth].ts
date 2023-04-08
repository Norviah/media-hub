import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { prisma } from '@/util/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import type { AuthOptions } from 'next-auth';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      id: 'google',
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
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
