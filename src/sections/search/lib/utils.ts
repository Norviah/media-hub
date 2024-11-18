import { MovieSortOptions, TVShowSortOptions } from '@/tmdb/endpoints/discover';
import { LayoutGridIcon, LayoutListIcon } from 'lucide-react';
import { Layout, MediaType, SearchState } from './enums';
import { SearchParamsSchema } from './schemas';

import { capitalize } from '@/lib/utils';
import { genres, getImagePath } from '@/tmdb';

import type { Movie, PersonSearchResult, TVShow } from '@/tmdb';
import type {
  MovieGenre,
  MovieSortOption,
  TVShowGenre,
  TVShowSortOption,
} from '@/tmdb/endpoints/discover';
import type { LucideIcon } from 'lucide-react';
import type { Route } from 'next';

export type LayoutItem = {
  slug: Layout | null;
  key: Layout;
};

export const defaultLayout: LayoutItem = {
  slug: null,
  key: Layout.GRID,
};

export const layouts: LayoutItem[] = [defaultLayout, { slug: Layout.LIST, key: Layout.LIST }];

export const icons: Record<Layout, LucideIcon> = {
  grid: LayoutGridIcon,
  list: LayoutListIcon,
};

export type Media = {
  /**
   * The type of media.
   */
  type: MediaType;

  /**
   * The name of the media.
   */
  name: string;

  /**
   * The media's respective id on TMDB.
   */
  id: number;

  /**
   * The path to the media's respective page in the application.
   */
  path: Extract<Route<`/${MediaType}/${string}`>, `/${MediaType}/${string}`>;

  /**
   * The constructed link for the media's poster image.
   *
   * If a poster image does not exist, this will instead represent a placeholder
   * image with the media's name.
   */
  poster: string;

  /**
   * The year the media was released.
   */
  year: string | null | undefined;
};

export function parseMedia(item: Movie | TVShow | PersonSearchResult): Media {
  const name = item.media_type === MediaType.MOVIE ? item.title : item.name;
  const posterPath = item.media_type === MediaType.PERSON ? item.profile_path : item.poster_path;

  const year =
    item.media_type === MediaType.PERSON
      ? undefined
      : item.media_type === MediaType.MOVIE
        ? item.release_date
        : item.first_air_date;

  return {
    name,
    id: item.id,
    poster: getImagePath({ path: posterPath, alt: name }),
    path: `/${item.media_type}/${item.id}` as const,
    type: item.media_type,
    year,
  };
}

/**
 * Gets the current search state based on the present query parameters.
 *
 * @param params The active search query parameters.
 * @returns The current search state.
 */
export function getSearchState(params: SearchParamsSchema): SearchState {
  if (params.q) {
    return SearchState.SEARCH;
  }

  if (params.type === MediaType.PERSON && !params.q) {
    return SearchState.PERSON_SEARCHING_NO_QUERY;
  }

  if (params.type && params.type !== MediaType.PERSON) {
    return SearchState.DISCOVER;
  }

  return SearchState.TRENDING;
}

export type SortOptionItem<Source extends MovieSortOption | TVShowSortOption> = {
  key: Source;
  name: string;
  direction: 'Ascending' | 'Descending';
  fullName: string;
};

export function parseSortOption<T extends MovieSortOption | TVShowSortOption>(string: T) {
  const [rawName, rawDirection] = string.split('.');

  const direction = rawDirection.toLowerCase() === 'asc' ? 'Ascending' : 'Descending';
  const name = capitalize(rawName.replace(/_/g, ' '));

  return {
    key: string,
    name,
    direction,
    fullName: `${name} ${direction}`,
  };
}

export const defaultSortOption: MovieSortOption | TVShowSortOption = 'popularity.desc';

const sortOptions = {
  [MediaType.MOVIE]: Object.values(MovieSortOptions),
  [MediaType.TV]: Object.values(TVShowSortOptions),
};

export function getState(searchParams: Record<string, unknown>) {
  const params = SearchParamsSchema.parse(searchParams);
  const layout = layouts.find((layout) => layout.slug === params.layout) ?? defaultLayout;

  const genresList = params.type && params.type !== MediaType.PERSON ? genres[params.type] : [];
  const pickedGenres = genresList.filter((genre) => params.genres.includes(genre.name));
  const pickedGenresIds = pickedGenres.map((genre) => genre.id) as (TVShowGenre | MovieGenre)[];

  const ssortOptions =
    params.type && params.type !== MediaType.PERSON ? sortOptions[params.type] : [];
  const sortOption = ssortOptions.find((option) => option === params.sort) ?? defaultSortOption;

  const state = getSearchState(params);

  return {
    params,
    layout,
    genresList,
    pickedGenres,
    pickedGenresIds,
    state,
    sortOption,
    sortOptions: ssortOptions,
  };
}

export type SearchQueriesParsed = ReturnType<typeof getState>;
