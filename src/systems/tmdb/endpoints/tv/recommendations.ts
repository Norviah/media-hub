import { TVShowRecommendations } from '../../structs/Schemas';

import { GET } from '../../lib/api';
import { BASE_TV_PATH } from '../../lib/paths';

import type { ZodError } from 'zod';
import type { RateLimitError, UnknownResourceError } from '../../structs';
import type { Language } from '../../types';

export type TVShowRecommendationsOptions = {
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

  /**
   * The specific page to query for.
   */
  page?: number;
};

/**
 * Get a list of recommended TV shows or movies for a TV show.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {UnknownResourceError} If a TV show with the given ID does not exist.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/tv-series-recommendations
 * @param options Options for the request.
 * @returns The response.
 */
export async function recommendations({
  id,
  language,
  page,
  options,
}: TVShowRecommendationsOptions): Promise<TVShowRecommendations> {
  const queries = {
    language,
    page: page?.toString(),
  };

  return await GET({
    path: `${BASE_TV_PATH}/${id}/recommendations`,
    queries,
    schema: TVShowRecommendations,
    options,
  });
}
