import { GET } from '../../lib/api';
import { PersonSearchResult } from '../../structs/Schemas';

import { Time } from './utils';
import { BASE_TRENDING_PATH } from '../../lib/paths';

import type { ZodError } from 'zod';
import type { RateLimitError } from '../../structs';
import type { Language } from '../../types';

export type TrendingPeopleOptions = {
  /**
   * The window of time to get the trending movies for.
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
 * Get the trending people on TMDB.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/trending-movies
 * @param options Options for the request.
 * @returns The response.
 */
export async function people({
  options,
  window = Time.DAY,
  ...queries
}: TrendingPeopleOptions = {}): Promise<PersonSearchResult> {
  return await GET({
    path: `${BASE_TRENDING_PATH}/movie/${window}`,
    queries,
    schema: PersonSearchResult,
    options,
  });
}
