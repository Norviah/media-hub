import { TVShowCredits } from '../../structs/Schemas';

import { GET } from '../../lib/api';
import { BASE_TV_PATH } from '../../lib/paths';

import type { ZodError } from 'zod';
import type { RateLimitError, UnknownResourceError } from '../../structs';
import type { Language } from '../../types';

export type TVShowCreditsOptions = {
  /**
   * The ID of the TV show.
   */
  id: number;

  /**
   * The language to display results in.
   */
  language?: Language;

  /**
   * Any additional options to apply to the API request.
   */
  options?: RequestInit;
};

/**
 * Get the latest season credits for a TV show.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {UnknownResourceError} If a TV show with the given ID does not exist.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/tv-series-credits
 * @param options Options for the request.
 * @returns The response.
 */
export async function credits({
  id,
  options,
  ...queries
}: TVShowCreditsOptions): Promise<TVShowCredits> {
  return await GET({
    path: `${BASE_TV_PATH}/${id}/credits`,
    queries,
    schema: TVShowCredits,
    options,
  });
}
