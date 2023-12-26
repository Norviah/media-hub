import { SearchContainer } from './Container';
import { Results } from './Results';

import { search } from '@/actions/tmdb';

import type { FilterItem, LayoutItem } from '../util/constants';

type Props = {
  layout: LayoutItem;
  filter: FilterItem;
  query: string | undefined;
};

export async function Search({ layout, filter, query }: Props): Promise<JSX.Element> {
  if (!query) {
    return <SearchContainer />;
  }

  const results = await search({ query, type: filter.key });

  if (results === null || query?.length === 0) {
    return (
      <SearchContainer placeholder={query}>
        That query didn&apos;t provide any results, please try a new one.
      </SearchContainer>
    );
  }

  return <Results prompt={query} layout={layout.key} initialResults={results} filter={filter.key} />;
}
