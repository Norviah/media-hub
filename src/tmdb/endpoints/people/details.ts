import {
  PersonCombinedCredits,
  PersonDetails,
  PersonExternalIds,
  PersonImages,
} from '../../structs/Schemas';

import { appendToResponseCall, GET } from '../../lib/api';
import { mergeSchemas } from '../../lib/merge';
import { BASE_PERSON_PATH } from '../../lib/paths';

import type { ZodError, ZodObject, z } from 'zod';
import type { RateLimitError, UnknownResourceError } from '../../structs';
import type { MergedSchemaObject } from '../../lib/merge';
import type { Language } from '../../types';

const ADDITIONAL_SCHEMAS = {
  combined_credits: PersonCombinedCredits,
  external_ids: PersonExternalIds,
  images: PersonImages,
  movie_credits: PersonCombinedCredits,
  tv_credits: PersonCombinedCredits,
} as const;

type SchemaKeys = keyof typeof ADDITIONAL_SCHEMAS;

export type PersonDetailsOptions<PickedSchemaKeys extends SchemaKeys[] | undefined> = {
  /**
   * The ID of the person.
   */
  id: number;

  /**
   * Any additional endpoints to include in the response.
   *
   * @see https://developer.themoviedb.org/reference/person-details
   * @see https://developer.themoviedb.org/docs/append-to-response
   */
  appendToResponse?: PickedSchemaKeys;

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
 * Get the top level details of a person.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {UnknownResourceError} If a person with the given ID does not exist.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/person-details
 * @param options Options for the request.
 * @returns The response.
 */
export async function details<AdditionalEndpoints extends SchemaKeys[] | undefined>({
  id,
  appendToResponse,
  language,
  options,
}: PersonDetailsOptions<AdditionalEndpoints>) {
  const queries = {
    append_to_response: appendToResponse?.join(','),
    language,
  };

  return await appendToResponseCall({
    baseSchema: PersonDetails,
    schemas: ADDITIONAL_SCHEMAS,
    pick: appendToResponse,
    path: `${BASE_PERSON_PATH}/${id}`,
    options,
    queries,
  });
}
