import { search } from '@/actions/tmdb';
import { Results } from './Results';

import type { FilterItem, LayoutItem } from '../../util/constants';

type Props = {
  query: string;
  layout: LayoutItem['key'];
  filter: FilterItem['key'];
};

export async function Search({ query, layout, filter }: Props): Promise<JSX.Element> {
  const results = await search({ query, type: filter });

  if (!results || results.data.length === 0) {
    return <>That query didn&apos;t provide any results, please try a new one.</>;
  }

  return <Results prompt={query} layout={layout} initialResults={results} filter={filter} />;
}
