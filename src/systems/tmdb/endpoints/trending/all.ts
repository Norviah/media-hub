import { GET } from '../../lib/api';
import { MultiSearchResults } from '../../structs/Schemas';

import { BASE_TRENDING_PATH } from '../../lib/paths';
import { Time } from './utils';

import type { ZodError } from 'zod';
import type { RateLimitError } from '../../structs';
import type { Language } from '../../types';

export type TrendingOptions = {
  /**
   * The window of time to get the results for.
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
 * Get trending movies, TV shows, and people.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/trending-all
 * @param options Options for the request.
 * @returns The response.
 */
export async function all({
  options,
  window = Time.DAY,
  ...queries
}: TrendingOptions = {}): Promise<MultiSearchResults> {
  return await GET({
    path: `${BASE_TRENDING_PATH}/all/${window}`,
    queries,
    schema: MultiSearchResults,
    options,
  });
}
