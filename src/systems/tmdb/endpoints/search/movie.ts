import { MovieSearchResults } from '../../structs/Schemas';

import { GET } from '../../lib/api';
import { BASE_SEARCH_PATH } from '../../lib/paths';

import type { ZodError } from 'zod';
import type { RateLimitError } from '../../structs';
import type { Language } from '../../types';

export type SearchMovieOptions = {
  /**
   * The name to search for.
   */
  query: string;

  /**
   * Whether to include adult content in the results.
   */
  include_adult?: boolean;

  /**
   * The language to display results in.
   */
  language?: Language;

  /**
   * Any additional options to apply to the API request.
   */
  options?: RequestInit;

  /**
   * The specific year of the release to get.
   */
  primary_release_year?: string;

  /**
   * The specific page of the results to get.
   */
  page?: number;

  /**
   * The specific region to get results from.
   */
  region?: string;

  /**
   * The first air date and all episode air dates.
   */
  year?: string;
};

/**
 * Search for movies by name
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/search-movie
 * @param options Options for the request.
 * @returns The response.
 */
export async function movie({
  options,
  ...queries
}: SearchMovieOptions): Promise<MovieSearchResults> {
  return await GET({
    path: `${BASE_SEARCH_PATH}/movie`,
    queries,
    schema: MovieSearchResults,
    options,
  });
}
