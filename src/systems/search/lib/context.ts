import { createContext } from 'react';
import { SearchParamsSchema, SearchState, defaultLayout } from '../lib';

import type { Genre } from '@/tmdb';
import type { LayoutItem } from '../lib';

export type SearchContext = {
  params: SearchParamsSchema;
  layout: LayoutItem;
  genresList: Genre[];
  pickedGenres: Genre[];
  state: SearchState;
};

export const SearchContext = createContext<SearchContext>({
  params: SearchParamsSchema.parse({}),
  layout: defaultLayout,
  genresList: [],
  pickedGenres: [],
  state: SearchState.TRENDING,
});
