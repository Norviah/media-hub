import { SearchParams } from '@/utils/params';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { constructUrl } from './constructUrl';

import type { Route } from 'next';

export interface RouteItem {
  path: '/search' | '/search/tv' | '/search/movie';
  title: string;
  parseParams: (params: ReadonlyURLSearchParams) => Route;
}

export const baseRoute: RouteItem = {
  path: '/search',
  title: 'Trending',
  parseParams: (params: ReadonlyURLSearchParams): Route => {
    return constructUrl({ path: '/search', params, overrides: { [SearchParams.GENRES]: undefined } });
  },
};

export const routes: RouteItem[] = [
  baseRoute,
  {
    path: '/search/tv',
    title: 'TV',
    parseParams: (params: ReadonlyURLSearchParams): Route => {
      return constructUrl({ params, path: '/search/tv', overrides: { [SearchParams.GENRES]: undefined } });
    },
  },
  {
    path: '/search/movie',
    title: 'Movies',
    parseParams: (params: ReadonlyURLSearchParams): Route => {
      return constructUrl({ params, path: '/search/movie', overrides: { [SearchParams.GENRES]: undefined } });
    },
  },
];
