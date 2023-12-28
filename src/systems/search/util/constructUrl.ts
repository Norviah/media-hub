import type { Route } from '@/types/Route';
import type { ReadonlyURLSearchParams } from 'next/navigation';

export function constructUrl(params: ReadonlyURLSearchParams, overrides: Record<string, string | undefined>): Route['path'] {
  const q = params.get('q');
  const layout = params.get('layout');
  const filter = params.get('filter');

  const param: Record<string, string | undefined> = {
    ...(q && { q }),
    ...(filter && { filter }),
    ...(layout && { layout }),
    ...overrides,
  };

  for (const key in param) {
    if (param[key] === undefined) {
      delete param[key];
    }
  }

  const newParams = new URLSearchParams(param as Record<string, string>);

  const paramsString = newParams.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `/search${queryString}` as Route['path'];
}
