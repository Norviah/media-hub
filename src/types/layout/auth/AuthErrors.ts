import type { constants } from '@/layout/auth';

/**
 * The various errors that can be thrown from next-auth.
 *
 * @see https://next-auth.js.org/configuration/pages#sign-in-page
 */
export type AuthErrors = keyof typeof constants.ERRORS.AUTH;
