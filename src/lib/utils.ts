import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { ConstrainedRecord } from '@/types';
import type { ClassValue } from 'clsx';
import type { Route } from 'next';
import type { ClassNameValue } from 'tailwind-merge';
import type { RequireAtLeastOne } from 'type-fest';

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
   * A set of query parameters to keep in the constructed URL.
   *
   * If specified, only the keys in this array will be kept in the constructed
   * array, all other queries/keys will be removed.
   */
  keep?: Keys[];

  /**
   * A set of query parameters to remove from the constructed URL.
   *
   * Does the opposite of the `keep` property, each specified key is removed
   * from the constructed URL.
   */
  reset?: Keys[];
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
>({ route, params, overrides, keep, reset }: ConstructUrlOptions<T, Keys, Path>): Route<Path> {
  if (!params) {
    return route;
  }

  const query = new URLSearchParams();

  for (const key in params) {
    if (keep && !keep.includes(key as keyof T as Keys)) {
      continue;
    }

    if (reset?.includes(key as keyof T as Keys)) {
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

export type ConstrictVisibilityArgs = {
  index: number;
} & RequireAtLeastOne<Record<'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl', number>>;

/**
 * A utility function to control the visibility of elements based on
 * breakpoints.
 *
 * This function determines whether if an element should be rendered or hidden
 * based on its index and the specified visiblity limits for each breakpoint. If
 * an element's index is less than the value at a breakpoint, it will be
 * visible; otherwise, it will be hidden.
 *
 * @example
 *
 * ```tsx
 * <div className='flex flex-row justify-between gap-2'>
 *   {Array.from({ length: 6 }).map((_, index) => (
 *     <div
 *       key={index}
 *       className={cn(
 *         'h-40 w-full animate-pulse rounded border border-border bg-muted',
 *         constrictVisibility({ index, base: 4, sm: 5, md: 6, lg: 5, xl: 6 }),
 *       )}
 *     />
 *   ))}
 * </div>
 * ```
 */
export function constrictVisibility({ index, ...breakpoints }: ConstrictVisibilityArgs) {
  const lines: ClassNameValue[] = [];

  for (const breakpoint in breakpoints) {
    const key = breakpoint as keyof typeof breakpoints;

    // @ts-expect-error `breakpoints` can't be undefined.
    if (index < breakpoints[key]) {
      lines.push(`${key === 'base' ? '' : `${key}:`}block`);
    } else {
      lines.push(`${key === 'base' ? '' : `${key}:`}hidden`);
    }
  }

  return lines;
}
