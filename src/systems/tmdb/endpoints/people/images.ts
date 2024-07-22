import { PersonImages } from '../../structs/Schemas';

import { GET } from '../../lib/api';
import { BASE_PERSON_PATH } from '../../lib/paths';

import type { ZodError } from 'zod';
import type { RateLimitError, UnknownResourceError } from '../../structs';

export type PersonImagesOptions = {
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
 * Get the profile images that belong to a person.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {UnknownResourceError} If a person with the given ID does not exist.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/person-images
 * @param options Options for the request.
 * @returns
 */
export async function images({ id, options }: PersonImagesOptions): Promise<PersonImages> {
  return await GET({ path: `${BASE_PERSON_PATH}/${id}/images`, schema: PersonImages, options });
}
