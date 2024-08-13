import { MovieKeywords } from '../../structs/Schemas';

import { GET } from '../../lib/api';
import { BASE_MOVIE_PATH } from '../../lib/paths';

import type { ZodError } from 'zod';
import type { RateLimitError, UnknownResourceError } from '../../structs';

export type MovieKeywordsOptions = {
  /**
   * The ID of the movie.
   */
  id: number;

  /**
   * Any additional options to apply to the API request.
   */
  options?: RequestInit;
};

/**
 * Get a list of keywords for a movie.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {UnknownResourceError} If a movie with the given ID does not exist.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/movie-keywords
 * @param options Options for the request.
 * @returns
 */
export async function keywords({ id, options }: MovieKeywordsOptions): Promise<MovieKeywords> {
  return await GET({
    path: `${BASE_MOVIE_PATH}/${id}/keywords`,
    schema: MovieKeywords,
    options,
  });
}
