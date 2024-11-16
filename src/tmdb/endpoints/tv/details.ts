import {
  AggregateCredits,
  TVShowDetails,
  TVShowExternalIds,
  TVShowImages,
  TVShowKeywords,
  TVShowRecommendations,
  TVShowVideos,
} from '../../structs/Schemas';

import { appendToResponseCall } from '../../lib/api';
import { BASE_TV_PATH } from '../../lib/paths';

import type { ZodError } from 'zod';
import type { RateLimitError, UnknownResourceError } from '../../structs';
import type { Language } from '../../types';

const ADDITIONAL_SCHEMAS = {
  aggregate_credits: AggregateCredits,
  external_ids: TVShowExternalIds,
  images: TVShowImages,
  keywords: TVShowKeywords,
  recommendations: TVShowRecommendations,
  videos: TVShowVideos,
} as const;

type SchemaKeys = keyof typeof ADDITIONAL_SCHEMAS;

export type TVShowDetailsOptions<PickedSchemaKeys extends SchemaKeys[] | undefined> = {
  /**
   * The ID of the TV show.
   */
  id: number;

  /**
   * Any additional endpoints to include in the response.
   *
   * @see https://developer.themoviedb.org/reference/movie-details
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
 * Get the top level details of a TV show.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {UnknownResourceError} If a TV show with the given ID does not exist.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/tv-series-details
 * @param options Options for the request.
 * @returns The response.
 */
export async function details<AdditionalEndpoints extends SchemaKeys[] | undefined>({
  id,
  appendToResponse,
  language,
  options,
}: TVShowDetailsOptions<AdditionalEndpoints>) {
  const queries = {
    append_to_response: appendToResponse?.join(','),
    language,
  };

  return await appendToResponseCall({
    baseSchema: TVShowDetails,
    schemas: ADDITIONAL_SCHEMAS,
    pick: appendToResponse,
    path: `${BASE_TV_PATH}/${id}`,
    options,
    queries,
  });
}
