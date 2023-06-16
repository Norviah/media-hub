import { getServerSession } from 'next-auth/next';
import { authOptions } from './options';

import type { Session } from 'next-auth';

export async function getCurrentUser(): Promise<Session['user'] | undefined> {
  return (await getServerSession(authOptions))?.user;
}
