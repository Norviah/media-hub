import { MovieRecommendations } from '../../structs/Schemas';

import { GET } from '../../lib/api';
import { BASE_MOVIE_PATH } from '../../lib/paths';

import type { ZodError } from 'zod';
import type { RateLimitError, UnknownResourceError } from '../../structs';
import type { Language } from '../../types';

export type MovieRecommendationsOptions = {
  /**
   * The ID of the movie.
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
 * Get the videos that belong to a movie.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {UnknownResourceError} If a movie with the given ID does not exist.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/movie-recommendations
 * @param options Options for the request.
 * @returns The response.
 */
export async function recommendations({
  id,
  options,
  ...queries
}: MovieRecommendationsOptions): Promise<MovieRecommendations> {
  return await GET({
    path: `${BASE_MOVIE_PATH}/${id}/recommendations`,
    queries,
    schema: MovieRecommendations,
    options,
  });
}