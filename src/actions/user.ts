'use server';

import { prisma } from '@/utils/prisma';
import type { User } from '@prisma/client';

export async function updateName({ userId, name }: { userId: string; name: string }): Promise<User> {
  return await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name,
    },
  });
}
