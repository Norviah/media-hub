import { DiscoverTVShows } from '../../structs/Schemas';

import { GET } from '../../lib/api';
import { BASE_DISCOVER_PATH } from '../../lib/paths';
import { andOrToString } from './utils/helpers';

import type { ZodError } from 'zod';
import type { RateLimitError } from '../../structs';
import type { Language } from '../../types';
import type { AndOr } from './types';
import type { MonetizationType } from './utils/constants';

export const TVShowGenres = {
  ActionAndAdventure: 10759,
  Animation: 16,
  Comedy: 35,
  Crime: 80,
  Documentary: 99,
  Drama: 18,
  Family: 10751,
  Kids: 10762,
  Mystery: 9648,
  News: 10763,
  Reality: 10764,
  SciFiAndFantasy: 10765,
  Soap: 10766,
  Talk: 10767,
  WarAndPolitics: 10768,
  Western: 37,
} as const;

export type TVShowGenre = (typeof TVShowGenres)[keyof typeof TVShowGenres];

export const TVShowSortOptions = {
  FirstAirDateAsc: 'first_air_date.asc',
  FirstAirDateDesc: 'first_air_date.desc',
  NameAsc: 'name.asc',
  NameDesc: 'name.desc',
  OriginalNameAsc: 'original_name.asc',
  OriginalNameDesc: 'original_name.desc',
  PopularityAsc: 'popularity.asc',
  PopularityDesc: 'popularity.desc',
  VoteAverageAsc: 'vote_average.asc',
  VoteAverageDesc: 'vote_average.desc',
  VoteCountAsc: 'vote_count.asc',
  VoteCountDesc: 'vote_count.desc',
} as const;

export type TVShowSortOption = (typeof TVShowSortOptions)[keyof typeof TVShowSortOptions];

export const TVShowTypes = {
  Documentary: 0,
  News: 1,
  Miniseries: 2,
  Reality: 3,
  Scripted: 4,
  TalkShow: 5,
  Video: 6,
} as const;

export type TVShowType = (typeof TVShowTypes)[keyof typeof TVShowTypes];

export const TVShowStatuses = {
  ReturningSeries: 0,
  Planned: 1,
  InProduction: 2,
  Ended: 3,
  Canceled: 4,
  Pilot: 5,
} as const;

export type TVShowStatus = (typeof TVShowStatuses)[keyof typeof TVShowStatuses];

export type DiscoverTVShowQueries = {
  'air_date.gte'?: string;
  'air_date.lte'?: string;
  first_air_date_year?: number;
  'first_air_date.gte'?: string;
  'first_air_date.lte'?: string;
  include_adult?: boolean;
  include_null_first_air_dates?: boolean;
  language?: Language;
  page?: number;
  screened_theatrically?: boolean;
  sort_by?: TVShowSortOption;
  timezone?: string;
  'vote_average.gte'?: number;
  'vote_average.lte'?: number;
  'vote_count.gte'?: number;
  'vote_count.lte'?: number;
  watch_region?: string;
  with_companies?: AndOr<string>;
  with_genres?: AndOr<TVShowGenre>;
  with_keywords?: AndOr<string>;
  with_networks?: number;
  with_origin_country?: string;
  with_original_language?: string;
  'with_runtime.gte'?: number;
  'with_runtime.lte'?: number;
  with_status?: AndOr<TVShowStatus>;
  with_watch_monetization_types?: AndOr<MonetizationType>;
  with_watch_providers?: AndOr<string>;
  without_companies?: string;
  without_genres?: TVShowGenre[];
  without_keywords?: string;
  without_watch_providers?: string;
  with_type?: AndOr<TVShowType>;
};

/**
 * Find TV shows using various filters.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/discover-tv
 * @param options Options for the request.
 * @returns
 */
export async function tv({
  with_companies,
  with_genres,
  with_keywords,
  with_status,
  with_watch_monetization_types,
  with_watch_providers,
  without_genres,
  with_type,
  ...rest
}: DiscoverTVShowQueries = {}): Promise<DiscoverTVShows> {
  const queries = {
    with_companies: andOrToString(with_companies),
    with_genres: andOrToString(with_genres),
    with_keywords: andOrToString(with_keywords),
    with_status: andOrToString(with_status),
    with_watch_monetization_types: andOrToString(with_watch_monetization_types),
    with_watch_providers: andOrToString(with_watch_providers),
    without_genres: without_genres?.join(','),
    with_type: andOrToString(with_type),
    ...rest,
  };

  return await GET({ path: `${BASE_DISCOVER_PATH}/tv`, queries, schema: DiscoverTVShows });
}
