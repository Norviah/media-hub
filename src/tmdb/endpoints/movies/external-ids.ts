import { MovieExternalIds } from '../../structs/Schemas';
import { GET } from '../../lib/api';

import { BASE_MOVIE_PATH } from '../../lib/paths';

import type { ZodError } from 'zod';
import type { RateLimitError, UnknownResourceError } from '../../structs';

export type MovieExternalIdsOptions = {
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
 * Get the external ids for a movie.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {UnknownResourceError} If a movie with the given ID does not exist.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/movie-external_ids
 * @param options Options for the request.
 * @returns The response.
 */
export async function externalIds({
  id,
  options,
}: MovieExternalIdsOptions): Promise<MovieExternalIds> {
  return await GET({
    path: `${BASE_MOVIE_PATH}/${id}/external_ids`,
    schema: MovieExternalIds,
    options,
  });
}
