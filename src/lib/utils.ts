import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { ConstrainedRecord } from '@/types';
import type { ClassValue } from 'clsx';
import type { Route } from 'next';

/**
 * A utility function that is a wrapper around the the `clsx` and
 * `tailwind-merge` package.
 *
 * @see https://www.npmjs.com/package/clsx
 * @see https://www.npmjs.com/package/tailwind-merge
 * @see https://dev.to/ramunarasinga/cn-utility-function-in-shadcn-uiui-3c4k
 *
 * @param classes The classes to merge.
 * @returns The merged classes.
 */
export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

/**
 * Capitalizes the first letter for all words, those that are separated by a
 * space, in a string.
 *
 * @param string The string to capitalize.
 * @returns The string with the first letter of each word capitalized.
 * @example
 *
 * ```ts
 * capitalize('hello world'); // 'Hello World'
 * ```
 */
export function capitalize(string: string): string {
  return string.replace(/\b\w/g, (l) => l.toUpperCase());
}

/**
 * @template T The structure of query parameters.
 * @template Keys The specific keys to modify in the query parameters.
 * @template Path The path for which to construct the URL.
 */
export type ConstructUrlOptions<
  T extends ConstrainedRecord<T>,
  Keys extends keyof T,
  Path extends string,
> = {
  /**
   * The route to construct a URL for.
   *
   * This property defines the specific route within the application for which
   * the URL will be constructed. It should represent a valid route or endpoint
   * in the application, and the resulting URL will be based on this path.
   *
   * @example
   *
   * ```ts
   * "/search"
   * ```
   */
  route: Route<Path>;

  /**
   * The current query parameters present in the URL.
   *
   * These parameters represent the key-value pairs that are extracted from the
   * URL, they indicate the current state of the page.
   */
  params?: T;

  /**
   * A set of query parameter overrides.
   *
   * This property allows you to selectively modify or update specific query
   * parameters from the existing set within the URL. Any keys specified in this
   * object will take precedence over their corresponding values from the `params`
   * property.
   *
   * If any key is given `null` or `undefined`, it will be removed from the URL.
   */
  overrides?: {
    [K in Keys]?: T[K] | null | undefined;
  };

  /**
   * The specific keys to keep in the query parameters.
   *
   * When constructing a new URL, if `params` is provided, all keys will be
   * included within the new URL, with `overrides` taking precedence.
   *
   * This property allows you to specify a subset of keys to keep from the
   * existing parameters, all other keys will be removed from the URL.
   */
  keep?: Keys[];
};

/**
 * Constructs a URL based on the provided route and specified query parameters.
 *
 * This function generates a URL string by combining a route with the existing
 * query parameters and any specified overrides to those parameters.
 *
 * @template T The structure of query parameters.
 * @template Keys The specific keys to modify in the query parameters.
 * @template Path The path for which to construct the URL.
 * @returns The constructed URL string.
 *
 * @example
 *
 * First, let's define a Zod schema for the query parameters.
 *
 * ```ts
 * import { z } from 'zod';
 *
 * const Schema = z.object({
 *   q: z.string().nullish().default(null),
 *   page: z.number().nullish().default(null),
 * });
 *
 * export type Schema = z.infer<typeof Schema>;
 * ```
 *
 * Using this schema, we can then parse the query parameters from the URL.
 *
 * `page.tsx`
 *
 * ```tsx
 * import type { PageProps } from '@/types';
 *
 * export default function Page({ searchParams }: PageProps) {
 *   const parsedParams = Schema.parse(searchParams);
 *
 *   return (
 *     // ...
 *   )
 * }
 * ```
 *
 * As an example, let's say we're at the following route:
 * `/search?q=mario&page=2`. If we want to construct a URL for page 3, we can do
 * the following:
 *
 * ```ts
 * const url = constructUrl<Schema>({
 *  route: '/search',
 *  params: parsedParams,
 *  overrides: {
 *    page: 3,
 *  },
 * });
 * ```
 *
 * Which would result in the following URL:
 *
 * ```
 * /search?q=mario&page=3
 * ```
 *
 * If we want to remove the `page` parameter from the URL, we can do the
 * following:
 *
 * ```ts
 * const url = constructUrl<Schema>({
 *   route: '/search',
 *   params: parsedParams,
 *   overrides: {
 *     page: null,
 *   },
 * });
 *
 * // => /search?q=mario
 * ```
 */
export function constructUrl<
  T extends ConstrainedRecord<T>,
  Keys extends keyof T = keyof T,
  Path extends string = string,
>({ route, params, overrides, keep }: ConstructUrlOptions<T, Keys, Path>): Route<Path> {
  if (!params) {
    return route;
  }

  const query = new URLSearchParams();

  for (const key in params) {
    if (keep && !keep.includes(key as keyof T as Keys)) {
      continue;
    }

    const value = overrides && key in overrides ? overrides[key as keyof T as Keys] : params[key];

    if (!Array.isArray(value) && value) {
      query.append(key, String(value));
    } else if (Array.isArray(value)) {
      for (const item of value) {
        if (item) {
          query.append(key, String(item));
        }
      }
    }
  }

  return query.size > 0 ? (`${route}?${query.toString()}` as Route) : route;
}
