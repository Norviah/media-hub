import type { SortOption } from 'tmdb-ts';

interface DiscoverQueryOptions {
  language?: string;
  sort_by?: SortOption;
  page?: number;
  'vote_average.gte'?: number;
  'vote_count.gte'?: number;
  'vote_count.lte'?: number;
  'vote_average.lte'?: number;
  with_watch_providers?: string;
  watch_region?: string;
  without_companies?: string;
  with_watch_monetization_types?: 'flatrate' | 'free' | 'ads' | 'rent' | 'buy';
  'with_runtime.gte'?: number;
  'with_runtime.lte'?: number;
  with_genres?: string;
  without_genres?: string;
  with_original_language?: string;
  without_keywords?: string;
  with_keywords?: string;
  with_companies?: string;
}

export interface MovieQueryOptions extends DiscoverQueryOptions {
  region?: string;
  certification_country?: string;
  certification?: string;
  'certification.lte'?: string;
  'certification.gte'?: string;
  include_adult?: boolean;
  include_video?: boolean;
  primary_release_year?: number;
  'primary_release_date.gte'?: string;
  'primary_release_date.lte'?: string;
  'release_date.gte'?: string;
  'release_date.lte'?: string;
  with_release_type?: string;
  year?: number;
  with_cast?: string;
  with_crew?: string;
  with_people?: string;
}

export interface TvShowQueryOptions extends DiscoverQueryOptions {
  'air_date.gte'?: string;
  'air_date.lte'?: string;
  'first_air_date.gte'?: string;
  'first_air_date.lte'?: string;
  first_air_date_year?: number;
  timezone?: string;
  with_networks?: string;
  include_null_first_air_dates?: boolean;
  screened_theatrically?: boolean;
  with_status?: string;
  with_type?: string;
}
