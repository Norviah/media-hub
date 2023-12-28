import { searchMovies, searchTvShows } from '@/actions/tmdb';
import { Results } from './Results';

import type { MovieSearchResult, TvSearchResult } from '@/actions/tmdb';
import type { Search } from 'tmdb-ts';
import type { FilterItem, LayoutItem } from '../../util/constants';

type Props = {
  query: string;
  layout: LayoutItem['key'];
  filter: FilterItem['key'];
};

export async function Search({ query, filter, layout }: Props): Promise<JSX.Element> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  let results: Search<TvSearchResult | MovieSearchResult> | null;

  if (filter === 'tv') {
    results = await searchTvShows({ query });
  } else {
    results = await searchMovies({ query });
  }

  if (!results || results.results.length === 0) {
    return <>That query didn&apos;t provide any results, please try a new one.</>;
  }

  return <Results initialResults={results} filter={filter} layout={layout} query={query} />;
}
