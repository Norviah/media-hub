import { GET } from '../../lib/api';
import { TVShowSearchResults } from '../../structs/Schemas';

import { BASE_TRENDING_PATH } from '../../lib/paths';
import { Time } from './utils';

import type { ZodError } from 'zod';
import type { RateLimitError } from '../../structs';
import type { Language } from '../../types';

export type TrendingTVShowOptions = {
  /**
   * The window of time to get the trending TV shows for.
   */
  window?: Time;

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
 * Get the trending TV shows on TMDB.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/trending-tv
 * @param options Options for the request.
 * @returns The response.
 */
export async function tv({
  options,
  window = Time.DAY,
  ...queries
}: TrendingTVShowOptions = {}): Promise<TVShowSearchResults> {
  return await GET({
    path: `${BASE_TRENDING_PATH}/tv/${window}`,
    queries,
    schema: TVShowSearchResults,
    options,
  });
}
