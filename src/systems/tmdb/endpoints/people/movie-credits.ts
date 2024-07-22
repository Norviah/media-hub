import { PersonMovieCredits } from '../../structs/Schemas';

import { GET } from '../../lib/api';
import { BASE_PERSON_PATH } from '../../lib/paths';

import type { ZodError } from 'zod';
import type { RateLimitError, UnknownResourceError } from '../../structs';
import type { Language } from '../../types';

export type PersonMovieCreditsOptions = {
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
 * Get the movie credits for a person.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {UnknownResourceError} If a person with the given ID does not exist.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/person-movie-credits
 * @param options Options for the request.
 * @returns
 */
export async function movieCredits({
  id,
  options,
  ...queries
}: PersonMovieCreditsOptions): Promise<PersonMovieCredits> {
  return await GET({
    path: `${BASE_PERSON_PATH}/${id}/movie_credits`,
    queries,
    schema: PersonMovieCredits,
    options,
  });
}
