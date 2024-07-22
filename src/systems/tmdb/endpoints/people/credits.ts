import { PersonCombinedCredits } from '../../structs/Schemas';

import { GET } from '../../lib/api';
import { BASE_PERSON_PATH } from '../../lib/paths';

import type { ZodError } from 'zod';
import type { RateLimitError, UnknownResourceError } from '../../structs';
import type { Language } from '../../types';

export type PeopleCreditsOptions = {
  /**
   * The ID of the person.
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
 * Get the combined movie and TV credits for a person.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {UnknownResourceError} If a person with the given ID does not exist.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/person-combined-credits
 * @param options Options for the request.
 * @returns
 */
export async function credits({
  id,
  options,
  ...queries
}: PeopleCreditsOptions): Promise<PersonCombinedCredits> {
  return await GET({
    path: `${BASE_PERSON_PATH}/${id}/combined_credits`,
    queries,
    schema: PersonCombinedCredits,
    options,
  });
}
