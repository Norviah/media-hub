import NextAuth from 'next-auth';

import { authOptions } from '@/systems/auth/util/options';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
