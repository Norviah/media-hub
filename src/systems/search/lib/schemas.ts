import { StringArraySchema, StringSchema } from '@/lib/schemas';
import { Layout, MediaType } from './enums';

import { z } from 'zod';

const today = new Date();
const minYear = 1900;
const maxYear = today.getFullYear() + 10;

export const years = Array.from({ length: maxYear - minYear + 1 }, (_, index) => maxYear - index);

/**
 * The schema for search query parameters.
 *
 * All routes under `/search` will use this schema to parse and validate query
 * parameters.
 */
export const SearchParamsSchema = z.object({
  q: StringSchema.nullish().default(null),
  year: z.coerce.number().min(minYear).max(maxYear).nullish().catch(null).default(null),
  genres: StringArraySchema.default([]),
  sort: StringSchema.nullish().default(null),
  layout: StringSchema.refine<Layout>((value): value is Layout => {
    // @ts-expect-error
    return Object.values(Layout).includes(value);
  })
    .nullish()
    .default(null)
    .catch(null),
  type: StringSchema.refine<MediaType>((value): value is MediaType => {
    // @ts-expect-error
    return Object.values(MediaType).includes(value);
  })
    .nullish()
    .default(null)
    .catch(null),
});

export type SearchParamsSchema = z.infer<typeof SearchParamsSchema>;
