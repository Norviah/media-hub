import { PersonExternalIds } from '../../structs/Schemas';

import { GET } from '../../lib/api';
import { BASE_PERSON_PATH } from '../../lib/paths';

import type { ZodError } from 'zod';
import type { RateLimitError, UnknownResourceError } from '../../structs';

export type PeopleExternalIdsOptions = {
  /**
   * The ID of the person.
   */
  id: number;

  /**
   * Any additional options to apply to the API request.
   */
  options?: RequestInit;
};

/**
 * Get a list of external IDs that belong to a person.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {UnknownResourceError} If a person with the given ID does not exist.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/person-external_ids
 * @param options Options for the request.
 * @returns
 */
export async function externalIds({
  id,
  options,
}: PeopleExternalIdsOptions): Promise<PersonExternalIds> {
  return await GET({
    path: `${BASE_PERSON_PATH}/${id}/external_ids`,
    schema: PersonExternalIds,
    options,
  });
}
