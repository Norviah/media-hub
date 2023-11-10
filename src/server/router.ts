import { publicProcedure, router } from '@/server/trpc';

export const appRouter = router({
  helloWorld: publicProcedure.query(async () => {
    return 'hello world';
  }),
});

export type AppRouter = typeof appRouter;
