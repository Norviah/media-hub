import { SearchParams } from '@/utils/params';

import type { Route } from 'next';
import type { ReadonlyURLSearchParams } from 'next/navigation';

type Params = {
  path: Route;
  params?: ReadonlyURLSearchParams;
  overrides?: Partial<Record<SearchParams, string | undefined | string[]>> | undefined;
};

/**
 * Constructs a new URL from the given path and search parameters.
 *
 * This function implements the logic for constructing a new URL in addition to
 * ensuring that needed search parameters are maintained when navigating
 * through the application.
 */
export function constructUrl({ path, params, overrides }: Params): Route {
  if (!params) {
    return path;
  }

  const query = params.get(SearchParams.QUERY);
  const layout = params.get(SearchParams.LAYOUT);
  const year = params.get(SearchParams.YEAR);
  const genres = params.getAll(SearchParams.GENRES);
  const sort = params.get(SearchParams.SORT);

  const queryParams: Record<string, string | undefined | string[]> = {
    ...(query && { [SearchParams.QUERY]: query }),
    ...(layout && { [SearchParams.LAYOUT]: layout }),
    ...(year && { [SearchParams.YEAR]: year }),
    ...(genres.length && { [SearchParams.GENRES]: genres }),
    ...(sort && { [SearchParams.SORT]: sort }),
    ...overrides,
  };

  const newQueryParams = new URLSearchParams();

  for (const key in queryParams) {
    const entry: string | string[] | undefined = queryParams[key];

    if (entry === undefined) {
      continue;
    }

    if (Array.isArray(entry)) {
      for (const value of entry) {
        newQueryParams.append(key, value);
      }
    } else {
      newQueryParams.append(key, entry);
    }
  }

  const toString = newQueryParams.toString();
  const queryString = `${toString.length ? '?' : ''}${toString}`;

  return `${path}${queryString}` as Route;
}
