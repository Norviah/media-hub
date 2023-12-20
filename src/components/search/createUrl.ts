import type { ReadonlyURLSearchParams } from 'next/navigation';
import type { Route } from '@/types/Route';

export function createUrl(pathname: Route['path'], params: URLSearchParams | ReadonlyURLSearchParams): Route['path'] {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}` as Route['path'];
}
