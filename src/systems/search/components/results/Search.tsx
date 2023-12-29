import { SearchOptions, search } from '@/actions/tmdb';
import { Results } from './Results';

import type { FilterItem, LayoutItem } from '../../util/constants';

type Props = {
  query: string;
  layout: LayoutItem['key'];
  filter: FilterItem['key'];
  year: string | undefined;
};

export async function Search({ query, filter, layout, year }: Props): Promise<JSX.Element> {
  let queryOptions: SearchOptions<'tv' | 'movie'>;

  if (filter === 'tv') {
    queryOptions = { type: 'tv', query, first_air_date_year: Number(year) } as SearchOptions<'tv'>;
  } else {
    queryOptions = { type: 'movie', query, year: Number(year) } as SearchOptions<'movie'>;
  }

  const results = await search(queryOptions);

  if (!results || results.results.length === 0) {
    return <>That query didn&apos;t provide any results, please try a new one.</>;
  }

  return <Results initialResults={results} layout={layout} queryOptions={queryOptions} />;
}
