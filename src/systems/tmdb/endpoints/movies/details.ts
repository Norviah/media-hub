import {
  MovieCredits,
  MovieDetails,
  MovieExternalIds,
  MovieImages,
  MovieVideos,
} from '../../structs/Schemas';

import { appendToResponseCall, GET } from '../../lib/api';
import { mergeSchemas } from '../../lib/merge';
import { BASE_MOVIE_PATH } from '../../lib/paths';

import type { ZodError, ZodObject, z } from 'zod';
import type { RateLimitError, UnknownResourceError } from '../../structs';
import type { MergedSchemaObject } from '../../lib/merge';
import type { Language } from '../../types';

const ADDITIONAL_SCHEMAS = {
  credits: MovieCredits,
  external_ids: MovieExternalIds,
  images: MovieImages,
  recommendations: MovieDetails,
  videos: MovieVideos,
};

type SchemaKeys = keyof typeof ADDITIONAL_SCHEMAS;

export type MovieDetailsOptions<PickedSchemaKeys extends SchemaKeys[] | undefined> = {
  /**
   * The ID of the movie.
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
 * Get the top level details of a movie by ID.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {UnknownResourceError} If a movie with the given ID does not exist.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/movie-details
 * @param options Options for the request.
 * @returns The response.
 */
export async function details<AdditionalEndpoints extends SchemaKeys[] | undefined>({
  id,
  appendToResponse,
  language,
  options,
}: MovieDetailsOptions<AdditionalEndpoints>) {
  const queries = {
    append_to_response: appendToResponse?.join(','),
    language,
  };

  return await appendToResponseCall({
    baseSchema: MovieDetails,
    schemas: ADDITIONAL_SCHEMAS,
    pick: appendToResponse,
    path: `${BASE_MOVIE_PATH}/${id}`,
    options,
    queries,
  });
}
