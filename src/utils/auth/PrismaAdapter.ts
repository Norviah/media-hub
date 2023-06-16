import { PrismaAdapter as BasePrismaAdapter } from '@next-auth/prisma-adapter';

import type { PrismaClient } from '@prisma/client';
import type { Adapter } from 'next-auth/adapters';

export function PrismaAdapter(prisma: PrismaClient): Adapter {
  return BasePrismaAdapter(prisma);
}
