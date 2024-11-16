import { Genres } from '../../structs/Schemas';

import { GET } from '../../lib/api';
import { BASE_GENRE_PATH } from '../../lib/paths';

import type { ZodError } from 'zod';
import type { RateLimitError } from '../../structs';
import type { Language } from '../../types';

export type MovieGenresOptions = {
  /**
   The language to display results in.
   */
  language?: Language;

  /**
   * Any additional options to apply to the API request.
   */
  options?: RequestInit;
};

/**
 * Get the list of official genres for movies.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/genre-movie-list
 * @param options Options for the request.
 * @returns
 */
export async function movies({ options, ...queries }: MovieGenresOptions): Promise<Genres> {
  return await GET({ path: `${BASE_GENRE_PATH}/movie/list`, queries, schema: Genres, options });
}
