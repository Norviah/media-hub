import { z } from 'zod';
import type { infer as Infer, ZodObject, ZodRawShape, ZodSchema } from 'zod';

export type MergeSchemasOptions<
  BaseSchema extends ZodObject<ZodRawShape>,
  Schemas extends Record<string, ZodObject<ZodRawShape>>,
  PickedSchemaKeys extends (keyof Schemas)[] | undefined,
> = {
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
  schemas: Schemas;

  /**
   * The specified schemas to pick and merge into the base schema.
   */
  pick: PickedSchemaKeys;
};

/**
 * Represents a Zod object for a merged schema.
 */
export type MergedSchemaObject<
  BaseSchema extends ZodObject<ZodRawShape>,
  Schemas extends Record<string, ZodObject<ZodRawShape>>,
  PickedSchemaKeys extends (keyof Schemas)[] | undefined,
> = ZodSchema<
  PickedSchemaKeys extends Array<keyof Schemas>
    ? Infer<BaseSchema> & {
        [Key in PickedSchemaKeys[number]]: Omit<Infer<Schemas[Key]>, 'id'>;
      }
    : Infer<BaseSchema>
>;

/**
 * Represents the final schema after merging additional schemas into the base
 * schema.
 *
 * The final schema will have the same shape as the base schema, but with
 * additional keys for each additional schema that was merged into it. For each
 * additional schema, the `id` key is omitted as TMDB does not include it in the
 * response.
 */
export type MergedSchema<
  BaseSchema extends ZodObject<ZodRawShape>,
  Schemas extends Record<string, ZodObject<ZodRawShape>>,
  PickedSchemaKeys extends (keyof Schemas)[] | undefined,
> = Infer<MergedSchemaObject<BaseSchema, Schemas, PickedSchemaKeys>>;

/**
 * Merges additional schemas into one schema for any TMDB endpoint that supports
 * the "append to response" functionality.
 *
 * In TMDB, this functionality provides a single endpoint to fetch multiple
 * different endpoint for a specific category. For example, when fetching the
 * details of a TV show, you can also fetch credits, external ids, images, etc.
 * The response for a append to response request will be the same object as the
 * main endpoint, but with additional keys for each additional endpoint.
 *
 * This function is responsible for creating a new schema to represent the
 * response of the main endpoint with any additional endpoints included.
 *
 * @see https://developer.themoviedb.org/docs/append-to-response
 *
 * @template BaseSchema The base schema to merge additional schemas into.
 * @template Schemas A record of schemas to pick from.
 * @template PickedSchemaKeys The keys of the schemas to pick and merge into the
 * base schema.
 *
 * @param options Represents the options for merging schemas.
 * @returns The merged schema.
 */
export function mergeSchemas<
  BaseSchema extends ZodObject<ZodRawShape>,
  Schemas extends Record<string, ZodObject<ZodRawShape>>,
  PickedSchemaKeys extends (keyof Schemas)[] | undefined,
>(options: MergeSchemasOptions<BaseSchema, Schemas, PickedSchemaKeys>) {
  let schema: ZodObject<ZodRawShape> = options.baseSchema;

  if (options.pick) {
    const uniqueKeys = Array.from(new Set(options.pick));

    for (const schemaKey of uniqueKeys) {
      const schemaToMerge = options.schemas[schemaKey];

      schema = schema.merge(
        z.object({
          [schemaKey]: schemaToMerge.omit({ id: true }),
        }),
      );
    }
  }

  return schema as unknown as MergedSchemaObject<BaseSchema, Schemas, PickedSchemaKeys>;
}
