import { DiscoverMovies } from '../../structs/Schemas';

import { GET } from '../../lib/api';
import { BASE_DISCOVER_PATH } from '../../lib/paths';
import { andOrToString } from './utils/helpers';

import type { ZodError } from 'zod';
import type { RateLimitError } from '../../structs';
import type { AndOr } from './types/AndOr';
import type { MonetizationType } from './types/MonetizationType';
import type { Language } from '../../types';

export type { MonetizationType };

export enum MovieReleaseType {
  Premiere = 1,
  TheatricalLimited = 2,
  Theatrical = 3,
  Digital = 4,
  Physical = 5,
  TV = 6,
}

export enum MovieGenres {
  Action = 28,
  Adventure = 12,
  Animation = 16,
  Comedy = 35,
  Crime = 80,
  Documentary = 99,
  Drama = 18,
  Family = 10751,
  Fantasy = 14,
  History = 36,
  Horror = 27,
  Music = 10402,
  Mystery = 9648,
  Romance = 10749,
  Science = 878,
  TV = 10770,
  Thriller = 53,
  War = 10752,
  Western = 37,
}

export enum MovieSortOptions {
  OriginalTitleAsc = 'original_title.asc',
  OriginalTitleDesc = 'original_title.desc',
  PopularityAsc = 'popularity.asc',
  PopularityDesc = 'popularity.desc',
  RevenueAsc = 'revenue.asc',
  RevenueDesc = 'revenue.desc',
  PrimaryReleaseDateAsc = 'primary_release_date.asc',
  PrimaryReleaseDateDesc = 'primary_release_date.desc',
  TitleAsc = 'title.asc',
  TitleDesc = 'title.desc',
  VoteAverageAsc = 'vote_average.asc',
  VoteAverageDesc = 'vote_average.desc',
  VoteCountAsc = 'vote_count.asc',
  VoteCountDesc = 'vote_count.desc',
}

export type DiscoverMovieQueryOptions = {
  certification?: string;
  'certification.gte'?: string;
  'certification.lte'?: string;
  certification_country?: string;
  include_adult?: boolean;
  include_video?: boolean;
  language?: Language;
  page?: number;
  primary_release_year?: number;
  'primary_release_date.gte'?: string;
  'primary_release_date.lte'?: string;
  region?: string;
  'release_date.gte'?: string;
  'release_date.lte'?: string;
  sort_by?: `${MovieSortOptions}`;
  'vote_average.gte'?: number;
  'vote_average.lte'?: number;
  'vote_count.gte'?: number;
  'vote_count.lte'?: number;
  watch_region?: string;
  with_cast?: AndOr<string>;
  with_companies?: AndOr<string>;
  with_crew?: AndOr<string>;
  with_genres?: AndOr<MovieGenres>;
  with_keywords?: AndOr<string>;
  with_origin_country?: string;
  with_original_language?: string;
  with_people?: AndOr<string>;
  with_release_type?: AndOr<MovieReleaseType>;
  'with_runtime.gte'?: number;
  'with_runtime.lte'?: number;
  with_watch_monetization_types?: AndOr<MonetizationType>;
  with_watch_providers?: AndOr<string>;
  without_companies?: string;
  without_genres?: MovieGenres[];
  without_keywords?: string;
  without_watch_providers?: string;
  year?: number;
};

/**
 * Find movies using various filters.
 *
 * @throws {RateLimitError} If the rate limit is exceeded.
 * @throws {ZodError} If the response does not match the expected schema.
 * @throws {Error} If any other error occurs while making the request.
 *
 * @see https://developer.themoviedb.org/reference/discover-movie
 * @param options Options for the request.
 * @returns
 */
export async function movies({
  with_cast,
  with_companies,
  with_crew,
  with_genres,
  with_keywords,
  with_people,
  with_release_type,
  with_watch_monetization_types,
  with_watch_providers,
  without_genres,
  ...rest
}: DiscoverMovieQueryOptions = {}): Promise<DiscoverMovies> {
  const queries = {
    with_cast: andOrToString(with_cast),
    with_companies: andOrToString(with_companies),
    with_crew: andOrToString(with_crew),
    with_genres: andOrToString(with_genres),
    with_keywords: andOrToString(with_keywords),
    with_people: andOrToString(with_people),
    with_release_type: andOrToString(with_release_type),
    with_watch_monetization_types: andOrToString(with_watch_monetization_types),
    with_watch_providers: andOrToString(with_watch_providers),
    without_genres: without_genres?.join(','),
    ...rest,
  };

  return await GET({ path: `${BASE_DISCOVER_PATH}/movie`, queries, schema: DiscoverMovies });
}
