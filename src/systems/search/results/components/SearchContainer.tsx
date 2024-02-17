import { Suspense } from 'react';
import { SearchMedia } from './SearchMedia';
import { SearchSkeleton } from './Skeleton';

import type { ParsedParams } from '../../common/utils';
import type { ActionType, SearchMediaProps } from './SearchMedia';

type SearchContainerProps = { params: ParsedParams } & Omit<SearchMediaProps<ActionType>, 'layout'>;

export function SearchContainer(props: SearchContainerProps): JSX.Element {
  const key = JSON.stringify(Object.values(props.params));

  return (
    <Suspense key={key} fallback={<SearchSkeleton layout={props.params.layout.key} />}>
      <SearchMedia layout={props.params.layout.key} {...props} />
    </Suspense>
  );
}
