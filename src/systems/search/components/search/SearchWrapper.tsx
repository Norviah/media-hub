import { SearchInfiniteLoading } from './SearchInfiniteLoading';

import type { Movie, PersonSearchResult, SearchResult, TVShow } from '@/tmdb';
import type { LayoutItem } from '../../lib';

export type SearchWrapperProps<T extends TVShow | Movie | PersonSearchResult> = {
  queryPage: (page: number) => Promise<SearchResult<T>>;
  layout: LayoutItem;
};

export async function SearchWrapper<T extends TVShow | Movie | PersonSearchResult>(
  props: SearchWrapperProps<T>,
): Promise<JSX.Element> {
  const data = await props.queryPage(1);

  return (
    <SearchInfiniteLoading
      initialResults={data}
      queryPage={props.queryPage}
      layout={props.layout}
    />
  );
}
