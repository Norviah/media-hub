import { TVShowExternalIds } from '../../structs/Schemas';

import { GET } from '../../lib/api';
import { BASE_TV_PATH } from '../../lib/paths';

import type { ZodError } from 'zod';
import type { RateLimitError, UnknownResourceError } from '../../structs';

export type TVShowExternalIdsOptions = {
  /**
   * The ID of the TV show.
   */
  id: number;

  /**
   * Any additional options to apply to the API request.
   */
  options?: RequestInit;
};

/**
 * Get a list of external IDs that have been added to a TV show.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {UnknownResourceError} If a TV show with the given ID does not exist.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/tv-series-external-ids
 * @param options Options for the request.
 * @returns
 */
export async function externalIds({
  id,
  options,
}: TVShowExternalIdsOptions): Promise<TVShowExternalIds> {
  return await GET({
    path: `${BASE_TV_PATH}/${id}/external_ids`,
    schema: TVShowExternalIds,
    options,
  });
}
