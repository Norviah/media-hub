import { LayoutGridIcon, LayoutListIcon } from 'lucide-react';
import { Layout, MediaType, SearchState } from './enums';

import { getImagePath } from '@/systems/tmdb';

import type { Movie, PersonSearchResult, TVShow } from '@/systems/tmdb';
import type { LucideIcon } from 'lucide-react';
import type { Route } from 'next';
import type { SearchParamsSchema } from './schemas';

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
  const imagePath = item.media_type === MediaType.PERSON ? item.profile_path : item.poster_path;
  const year =
    item.media_type === MediaType.PERSON
      ? undefined
      : item.media_type === MediaType.MOVIE
        ? item.release_date
        : item.first_air_date;

  return {
    name,
    id: item.id,
    poster: getImagePath({ path: imagePath, alt: name }),
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
