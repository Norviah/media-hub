import { getCurrentUser } from '@/utils/auth/session';
import { TRPCError, initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

export const router = t.router;

export const publicProcedure = t.procedure;

export const authedProcedure = publicProcedure.input(z.object({ userId: z.string() })).use(async (options) => {
  const user = await getCurrentUser();

  if (!user || user.id !== options.input.userId) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
    });
  }

  return options.next();
});
