import { TVShowSearchResults } from '../../structs/Schemas';

import { GET } from '../../lib/api';
import { BASE_SEARCH_PATH } from '../../lib/paths';

import type { ZodError } from 'zod';
import type { RateLimitError } from '../../structs';
import type { Language } from '../../types';

export type SearchTVShowOptions = {
  /**
   * The name to search for.
   */
  query: string;

  /**
   * Search only the first air date.
   *
   * Valid values are numbers from `1000` to `9999`.
   */
  first_air_date_year?: number;

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
   * The specific page of the results to get.
   */
  page?: number;

  /**
   * The first air date and all episode air dates.
   */
  year?: number;
};

/**
 * Search for TV shows by name
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/search-tv
 * @param options Options for the request.
 * @returns The response.
 */
export async function tv({
  options,
  ...queries
}: SearchTVShowOptions): Promise<TVShowSearchResults> {
  return await GET({
    path: `${BASE_SEARCH_PATH}/tv`,
    queries,
    schema: TVShowSearchResults,
    options,
  });
}
