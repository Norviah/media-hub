import { StatusCodes } from 'http-status-codes';
import { ParseError, RateLimitError, UnknownResourceError, UnkownError } from '../structs';

import { env } from '@/lib/env';
import { BASE_URL } from './paths';
import { mergeSchemas } from './merge';
import { handleError, parseQueryParams } from './utils';

import type { infer as Infer, ZodObject, ZodRawShape, ZodSchema } from 'zod';
import type { MergedSchema } from './merge';

export type ApiOptions<Schema extends ZodSchema> = {
  /**
   * The specified endpoint to call.
   */
  path: `/${string}`;

  /**
   * The schema to validate the response against.
   */
  schema: Schema;

  /**
   * Any additional queries to include in the request.
   */
  queries?: Record<string, string | number | boolean | undefined>;

  /**
   * Any additional options to apply to the API request.
   */
  options?: RequestInit;
};

/**
 * Calls a TMDB endpoint and validates the response against the provided schema.
 *
 * @see https://developer.themoviedb.org/docs/getting-started
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {UnknownResourceError} If a TV show with the given ID does not exist.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @template Schema The schema to validate the response against.
 * @returns The response from the API call.
 */
export async function GET<Schema extends ZodSchema>({
  path: rawPath,
  queries,
  schema,
  options,
}: ApiOptions<Schema>): Promise<Infer<Schema>> {
  const path = `${BASE_URL}${rawPath}${queries ? parseQueryParams(queries) : ''}`;

  const response = await fetch(path, {
    ...options,
    method: 'GET',
    headers: {
      ...options?.headers,
      Authorization: `Bearer ${env.TMDB_API_KEY}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

  if (!response.ok) {
    handleError(response);
  }

  try {
    return schema.parse(await response.json());
  } catch {
    throw new ParseError(path);
  }
}

export type AppendToRespondCallArgs<
  BaseSchema extends ZodObject<ZodRawShape>,
  Endpoints extends Record<string, ZodObject<ZodRawShape>>,
  PickedEndpoints extends (keyof Endpoints)[] | undefined,
> = Omit<ApiOptions<BaseSchema>, 'schema'> & {
  /**
   * The base schema to merge schemas into.
   *
   * Any additional schemas will be merged into this schema under the respective
   * key in the `schemas` object.
   */
  baseSchema: BaseSchema;

  /**
   * A list of additional schemas to merge into the base schema.
   */
  schemas: Endpoints;

  /**
   * The specified schemas to pick and merge into the base schema.
   */
  pick?: PickedEndpoints;
};

/**
 * Calls a TMDB endpoint that supports the "append to response" functionality.
 *
 * In TMDB, an endpoint that supports this functionality provides a single place
 * to fetch multiple different endpoints for a specific category. For example,
 * when fetching the details of a TV show, you can use the "append_to_response"
 * parameter to fetch credits, external ids, images, etc.
 *
 * When using this functionality, the response shares the same structure as the
 * original endpoint, with additional keys for each additional endpoint that was
 * fetched.
 *
 * @see https://developer.themoviedb.org/docs/append-to-response
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {UnknownResourceError} If a TV show with the given ID does not exist.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @template BaseSchema The schema for the base endpoint.
 * @template Endpoints A record of additional endpoints to include in the
 * response, with the value representing the schema for that endpoint.
 * @template PickedEndpoints The desired additional endpoints to include in the
 * response.
 *
 * @returns The response from the API call.
 */
export async function appendToResponseCall<
  BaseSchema extends ZodObject<ZodRawShape>,
  Endpoints extends Record<string, ZodObject<ZodRawShape>>,
  PickedEndpoints extends (keyof Endpoints)[] | undefined,
>({
  pick,
  baseSchema,
  schemas,
  path,
  queries,
  options,
}: AppendToRespondCallArgs<BaseSchema, Endpoints, PickedEndpoints>) {
  const response = await GET({
    path,
    queries,
    options,
    schema: pick ? mergeSchemas({ baseSchema, schemas, pick }) : baseSchema,
  });

  return response as MergedSchema<BaseSchema, Endpoints, PickedEndpoints>;
}
