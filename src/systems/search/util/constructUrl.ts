import type { Route } from '@/types/Route';
import type { ReadonlyURLSearchParams } from 'next/navigation';

export function constructUrl(
  params: ReadonlyURLSearchParams,
  overrides: Record<string, string | undefined | string[]>
): Route['path'] {
  const q = params.get('q');
  const layout = params.get('layout');
  const filter = params.get('filter');
  const year = params.get('year');
  const genres = params.getAll('genres');

  const param: Record<string, string | undefined | string[]> = {
    ...(q && { q }),
    ...(filter && { filter }),
    ...(layout && { layout }),
    ...(year && { year }),
    ...(genres.length && { genres }),
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

  return `/search${queryString}` as Route['path'];
}
