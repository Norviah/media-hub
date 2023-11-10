import { authedProcedure, router } from '@/server/trpc';
import { prisma } from '@/utils/prisma';
import { z } from 'zod';

export const userRouter = router({
  updateName: authedProcedure.input(z.object({ name: z.string() })).mutation(async (options) => {
    await prisma.user.update({
      where: {
        id: options.input.userId,
      },
      data: {
        name: options.input.name,
      },
    });
  }),
});
