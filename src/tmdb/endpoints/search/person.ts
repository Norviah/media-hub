import { PersonSearchResults } from '../../structs/Schemas';

import { GET } from '../../lib/api';
import { BASE_SEARCH_PATH } from '../../lib/paths';

import type { ZodError } from 'zod';
import type { RateLimitError } from '../../structs';
import type { Language } from '../../types';

export type SearchPersonOptions = {
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
   * The specific page of the results to get.
   */
  page?: number;
};

/**
 * For for people by either name or known-as names.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/search-person
 * @param options Options for the request.
 * @returns The response.
 */
export async function person({
  options,
  ...queries
}: SearchPersonOptions): Promise<PersonSearchResults> {
  return await GET({
    path: `${BASE_SEARCH_PATH}/person`,
    queries,
    schema: PersonSearchResults,
    options,
  });
}
