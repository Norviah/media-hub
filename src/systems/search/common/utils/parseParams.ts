import { SearchParams } from '@/utils/params';
import { ReadonlyURLSearchParams } from 'next/navigation';

import { getAllParams, getFirstParam } from '@/utils/getFirstParam';
import { movieGenres, tvGenres } from './genres';
import { defaultLayout, layouts } from './layout';
import { defaultSortOption, movieSortOptions, tvSortOptions } from './sort';

import type { Route } from 'next';
import type { Genre } from 'tmdb-ts';
import type { LayoutItem } from './layout';
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

  const genresParams: string[] | undefined =
    params.getAll(SearchParams.GENRES).map((genre) => genre.toLowerCase()) || undefined;
  const genresList: Genre[] = route.includes('/tv') ? tvGenres : movieGenres;
  const genres = genresList.filter((genre) => genresParams.includes(genre.name.toLowerCase()));

  const sortOptions = route.includes('/tv') ? tvSortOptions : movieSortOptions;
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

  const genresParams: string[] | undefined = getAllParams(params, SearchParams.GENRES).map((genre) => genre.toLowerCase());
  const genresList: Genre[] = route.includes('/tv') ? tvGenres : movieGenres;
  const genres = genresList.filter((genre) => genresParams.includes(genre.name.toLowerCase()));

  const sortOptions = route.includes('/tv') ? tvSortOptions : movieSortOptions;
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

// ---

// type GetParamArgs<T> = {
//   params: ReadonlyURLSearchParams | Record<string, string | string[] | undefined>;
//   key: SearchParams;
//   parser: (val: string) => T;
//   defaultValue: T | undefined;
// };

// function getParam<T>({ params, key, parser: parse, defaultValue }: GetParamArgs<T>): T | undefined {
//   let value: string | undefined;

//   if (params instanceof ReadonlyURLSearchParams) {
//     value = params.get(key) ?? undefined;
//   } else {
//     value = getFirstParam(params, key);
//   }

//   if (value) {
//   } else {
//   }

//   // if (!value) {
//   //   return defaultValue;
//   // } else {
//   //   return parse(value);
//   // }
// }

// export function parseParams(
//   pathname: Route,
//   params: Record<string, string | string[] | undefined> | ReadonlyURLSearchParams
// ) {
//   const query = getParam<string>({ params, key: SearchParams.QUERY, parser: String, defaultValue: undefined });
//   const year = getParam<number>({ params, key: SearchParams.YEAR, parser: Number, defaultValue: undefined }) || undefined;

//   const layout = getParam<LayoutItem>({
//     params,
//     key: SearchParams.LAYOUT,
//     parser: (param) => layouts.find((item) => item.slug === param) || defaultLayout,
//   });

//   const sort = getParam<SortOptionItem>({
//     params,
//     key: SearchParams.SORT,
//     parser: (param) => sortOptions.find((item) => item.value === param) || defaultSortOption,
//   });

//   // console.log(query);
//   // return null;

//   return { query, year, layout, sort };
// }

// // function getParam<T>(
// //   params: Record<string, string | string[] | undefined>,
// //   paramKey: SearchParams,
// //   converter: (val: string) => T,
// //   defaultValue: T
// // ): T {
// //   const paramValue = getFirstParam(params, paramKey);
// //   return paramValue ? converter(paramValue) : defaultValue;
// // }

// // function parseParams(
// //   route: Route,
// //   params: ReadonlyURLSearchParams | Record<string, string | string[] | undefined>
// // ): ParsedParams {
// //   const query: string | undefined = getParam(params, SearchParams.QUERY, String, undefined);
// //   const year: number | undefined = getParam(params, SearchParams.YEAR, Number, undefined);

// //   const layout: LayoutItem = getParam(
// //     params,
// //     SearchParams.LAYOUT,
// //     (layoutParam) => layouts.find((item) => item.slug === layoutParam) || defaultLayout,
// //     defaultLayout
// //   );

// //   const genresParams: string[] | undefined = getAllParams(params, SearchParams.GENRES).map((genre) => genre.toLowerCase());
// //   const genresList: Genre[] = route.includes('/tv') ? tvGenres : movieGenres;
// //   const genres = genresList.filter((genre) => genresParams.includes(genre.name.toLowerCase()));

// //   const sort: SortOption = getParam(
// //     params,
// //     SearchParams.SORT,
// //     (sortParam) => sortOptions.find((item) => item.value === sortParam) || defaultSortOption,
// //     defaultSortOption
// //   );

// //   return {
// //     query,
// //     year,
// //     layout,
// //     genres,
// //     sort,
// //   };
// // }
