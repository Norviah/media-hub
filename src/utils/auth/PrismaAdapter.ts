import { prisma } from '@/utils/prisma';
import { PrismaAdapter as BasePrismaAdapter } from '@next-auth/prisma-adapter';

import type { PrismaClient } from '@prisma/client';
import type { Adapter, AdapterSession, AdapterUser } from 'next-auth/adapters';

export function PrismaAdapter(): Adapter {
  const base: Adapter = BasePrismaAdapter(prisma as unknown as PrismaClient);

  return {
    ...base,

    async getSessionAndUser(sessionToken): Promise<{ session: AdapterSession; user: AdapterUser } | null> {
      const userAndSession = await prisma.session.findUnique({
        where: {
          sessionToken,
        },
        include: {
          user: true,
        },
        cacheStrategy: { ttl: 30 },
      });

      if (!userAndSession) {
        return null;
      }

      const { user, ...session } = userAndSession;
      return { user, session } as { session: AdapterSession; user: AdapterUser };
    },
  };
}
