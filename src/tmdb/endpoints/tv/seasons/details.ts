import { TVShowSeasonDetails } from '../../../structs/Schemas';

import { GET } from '../../../lib/api';
import { BASE_SEASON } from './constants';

import type { ZodError } from 'zod';
import type { RateLimitError, UnknownResourceError } from '../../../structs';
import type { SeasonSelection } from './constants';
import type { Language } from '../../../types';

export type SeasonDetailsOptions = SeasonSelection & {
  // /**
  //  * Any additional endpoints to include in the response.
  //  *
  //  * @see https://developer.themoviedb.org/reference/tv-season-details
  //  * @see https://developer.themoviedb.org/docs/append-to-response
  //  */
  // appendToResponse?: string[];

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
 * Get the details of a TV season.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {UnknownResourceError} If a TV show with the given ID does not exist.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/tv-season-details
 * @param options Options for the request.
 * @returns The response.
 */
export async function details({
  id,
  seasonNumber,
  // appendToResponse,
  language,
  options,
}: SeasonDetailsOptions): Promise<TVShowSeasonDetails> {
  const queries = {
    // append_to_response: appendToResponse?.join(','),
    language,
  };

  return await GET({
    path: BASE_SEASON({ id, seasonNumber }),
    queries,
    schema: TVShowSeasonDetails,
    options,
  });
}
