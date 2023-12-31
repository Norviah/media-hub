import { SearchParams } from '@/utils/params';
import { ReadonlyURLSearchParams } from 'next/navigation';

import { getAllParams, getFirstParam } from '@/utils/getFirstParam';
import { defaultLayout, layouts } from './constants';
import { movieGenres, tvGenres } from './genres';
import { defaultSortOption, sortOptions } from './sort';

import type { Genre } from '@/actions/tmdb';
import type { Route } from 'next';
import type { LayoutItem } from './constants';
import type { SortOptionItem } from './sort';

export type ParsedParams = {
  query: string | undefined;
  year: number | undefined;
  layout: LayoutItem;
  genres: Genre[];
  sort: SortOptionItem;
};

function parseParamsFromParams(route: Route, params: ReadonlyURLSearchParams): ParsedParams {
  const query: string | undefined = params.get(SearchParams.QUERY) || undefined;
  const year: number | undefined = Number(params.get(SearchParams.YEAR)) || undefined;
  const layoutParam: string | undefined = params.get(SearchParams.LAYOUT) || undefined;
  const layout: LayoutItem = layoutParam
    ? layouts.find((item) => item.slug === layoutParam) || defaultLayout
    : defaultLayout;

  const genresParams: string[] | undefined = params.getAll(SearchParams.GENRES) || undefined;
  const genresList: Genre[] = route.includes('/tv') ? tvGenres : movieGenres;
  const genres = genresList.filter((genre) => genresParams.includes(genre.name.toLowerCase()));

  const sortParam: string | undefined = params.get(SearchParams.SORT) || undefined;
  const sort = sortOptions.find((item) => item.value === sortParam) || defaultSortOption;

  return {
    query,
    year,
    layout,
    genres,
    sort,
  };
}

function parseParamsFromObject(route: Route, params: Record<string, string | string[] | undefined>): ParsedParams {
  const query: string | undefined = getFirstParam(params, SearchParams.QUERY);
  const year: number | undefined = Number(getFirstParam(params, SearchParams.YEAR)) || undefined;

  const layoutParam: string | undefined = getFirstParam(params, SearchParams.LAYOUT);
  const layout: LayoutItem = layoutParam
    ? layouts.find((item) => item.slug === layoutParam) || defaultLayout
    : defaultLayout;

  const genresParams: string[] | undefined = getAllParams(params, SearchParams.GENRES);
  const genresList: Genre[] = route.includes('/tv') ? tvGenres : movieGenres;
  const genres = genresList.filter((genre) => genresParams.includes(genre.name.toLowerCase()));

  const sortParam: string | undefined = getFirstParam(params, SearchParams.SORT);
  const sort = sortOptions.find((item) => item.value === sortParam) || defaultSortOption;

  return {
    query,
    year,
    layout,
    genres,
    sort,
  };
}

export function parseParams(
  route: Route,
  params: ReadonlyURLSearchParams | Record<string, string | string[] | undefined>
): ParsedParams {
  return params instanceof ReadonlyURLSearchParams
    ? parseParamsFromParams(route, params)
    : parseParamsFromObject(route, params);
}
