'use client';

import { MediaCover, MediaList, mediaCoverClasses, mediaListClasses } from '../ui';
import { LoadingState } from '@/hooks/useInfiniteLoading';

import type { Movie, PersonSearchResult, TVShow } from '@/tmdb';
import type { SkeletalProps } from '@/types';
import type { LayoutItem } from '../../lib';

export type MediaGridProps = SkeletalProps<
  {
    data: (TVShow | Movie | PersonSearchResult)[];
    state: LoadingState;
    viewRef: (node?: Element | null) => void;
    layout: LayoutItem;
  },
  'layout'
>;

export function MediaGrid({ data, state, viewRef, layout, skeleton }: MediaGridProps): JSX.Element {
  const layoutClassName = (layout.key === 'grid' ? mediaCoverClasses : mediaListClasses).layout;
  const Component = layout.key === 'grid' ? MediaCover : MediaList;

  if (skeleton) {
    return (
      <div className={layoutClassName}>
        {Array.from({ length: 20 }).map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: It's a skeleton, using the index is fine.
          <Component key={i} skeleton />
        ))}
      </div>
    );
  }

  return (
    <div className={layoutClassName}>
      {data.map((item) => (
        <Component key={item.id} item={item} />
      ))}

      {state === LoadingState.LOADING && (
        <>
          {Array.from({ length: 20 }).map((_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: It's a skeleton, using the index is fine.
            <Component key={i} skeleton />
          ))}
        </>
      )}

      {state === LoadingState.IDLE && <div ref={viewRef} />}
    </div>
  );
}
