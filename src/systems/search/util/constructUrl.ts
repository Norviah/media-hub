import { SearchParams } from '@/utils/params';

import type { Route } from 'next';
import type { ReadonlyURLSearchParams } from 'next/navigation';

type Params = {
  overrides?: Partial<Record<SearchParams, string | undefined | string[]>>;
  path: Route;
  params?: ReadonlyURLSearchParams;
  reset?: boolean;
};

export function constructUrl({ params, path, overrides, reset }: Params): Route {
  if (!params || reset) {
    return path;
  }

  const q = params.get(SearchParams.QUERY);
  const layout = params.get(SearchParams.LAYOUT);
  const year = params.get(SearchParams.YEAR);
  const genres = params.getAll(SearchParams.GENRES);

  const param: Record<string, string | undefined | string[]> = {
    ...(q && { [SearchParams.QUERY]: q }),
    ...(layout && { [SearchParams.LAYOUT]: layout }),
    ...(year && { [SearchParams.YEAR]: year }),
    ...(genres.length && { [SearchParams.GENRES]: genres }),
    ...overrides,
  };

  const newParams = new URLSearchParams();

  for (const key in param) {
    const value: string | string[] | undefined = param[key];

    if (value === undefined) {
      continue;
    }

    if (Array.isArray(value)) {
      for (const v of value) {
        newParams.append(key, v);
      }
    } else {
      newParams.append(key, value);
    }
  }

  const paramsString = newParams.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${path}${queryString}` as Route;
}
