import { z } from 'zod';

/**
 * Matches a string or an array of strings.
 *
 * When working with query parameters, Next.js will automatically parse
 * query parameters as arrays if the same key is used multiple times,
 * because of this, we need to account for both cases.
 *
 * @example
 *
 * ```ts
 * StringOrStringArraySchema.parse("q");   // => "q"
 * StringOrStringArraySchema.parse(["q"]); // => ["q"]
 * ```
 */
const StringOrStringArraySchema = z.union([z.string(), z.array(z.string())]);

/**
 * Resolves a string or an array of strings into a single string.
 *
 * Some schemas may require a single string value, since Next.js automatically
 * parses query parameters as arrays if the same key is used multiple times,
 * this schema will resolve an array of strings into a single string.
 *
 * @example
 *
 * ```ts
 * StringSchema.parse("hello");            // => "hello"
 * StringSchema.parse(["hello", "world"]); // => "hello"
 * ```
 */
const StringSchema = StringOrStringArraySchema.transform((x) => {
  return Array.isArray(x) ? x[0] : x;
});

/**
 * Resolves a string or an array of strings into an array of strings.
 *
 * Some schemas may require an array of strings, this schema extends
 * `StringOrStringArraySchema` and resolves a single string into an array
 * containing that string.
 *
 * @example
 *
 * ```ts
 * StringArraySchema.parse("hello");            // => ["hello"]
 * StringArraySchema.parse(["hello", "world"]); // => ["hello", "world"]
 * ```
 */
const StringArraySchema = StringOrStringArraySchema.transform((x) => {
  return Array.isArray(x) ? x : [x];
});

/**
 * The schema for search query parameters.
 *
 * All routes under `/search` will use this schema to parse and validate query
 * parameters.
 */
export const SearchParamsSchema = z.object({
  q: StringSchema.nullish().default(null),
  year: StringSchema.refine((value) => !Number.isNaN(Number(value)))
    .transform((value) => Number(value))
    .nullish()
    .catch(null)
    .default(null),
  genres: StringArraySchema.default([]),
  sort: StringSchema.nullish().default(null),
  layout: z.enum(['grid', 'list']).nullish().default(null).catch(null),
  type: z.enum(['movie', 'tv', 'person']).nullish().default(null).catch(null),
});

export type SearchParamsSchema = z.infer<typeof SearchParamsSchema>;
