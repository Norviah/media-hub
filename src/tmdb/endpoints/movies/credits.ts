import { MovieCredits } from '../../structs/Schemas';
import { GET } from '../../lib/api';

import { BASE_MOVIE_PATH } from '../../lib/paths';

import type { ZodError } from 'zod';
import type { RateLimitError, UnknownResourceError } from '../../structs';
import type { Language } from '../../types';

export type MovieCreditsOption = {
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
 * Get the credits for a movie.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {UnknownResourceError} If a movie with the given ID does not exist.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/movie-credits
 * @param options Options for the request.
 * @returns The response.
 */
export async function credits({
  id,
  language,
  options,
}: MovieCreditsOption): Promise<MovieCredits> {
  const queries = {
    language,
  };

  return await GET({
    path: `${BASE_MOVIE_PATH}/${id}/credits`,
    queries,
    schema: MovieCredits,
    options,
  });
}
