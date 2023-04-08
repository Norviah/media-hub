export { default } from 'next-auth/middleware';

/**
 * Configures authorization for `next-auth`.
 *
 * Next.js allows us to define middleware for our application within the
 * `src/middleware.ts` file, which is then used by `next-auth` to ensure that
 * users are authenticated before accessing certain pages.
 * @see https://nextjs.org/docs/advanced-features/middleware
 * @see https://next-auth.js.org/tutorials/securing-pages-and-api-routes#nextjs-middleware
 */
export const config = { matcher: ['/settings', '/collections'] };
