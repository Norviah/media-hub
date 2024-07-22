import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  /**
   * Server side environment variables.
   *
   * These variables are only available on the server and will throw an error
   * if accessed on the client.
   */
  server: {
    TMDB_API_KEY: z.string().min(1),
  },

  /**
   * Client side environment variables.
   *
   * These variables are available on both the client and server, these
   * variables must be prefexed with `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
  },

  /**
   * Due to how Next.js bundles environment variables, we'll need to manually
   * destruct them to make sure all are included within the bundle.
   *
   * All environment variables from `server` and `client` must be included here.
   */
  runtimeEnv: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
});
