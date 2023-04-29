import type { Movie } from 'tmdb-ts';
import type { SearchResult } from '@/types/api/search/SearchResult';

export type ResultState = {
  query: string;
} & SearchResult;

export type LoadingState = {
  query: string;
  results: null;
};
