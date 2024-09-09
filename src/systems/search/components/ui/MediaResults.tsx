'use client';

import { MediaCover, MediaList, mediaCoverClasses, mediaListClasses } from '../ui';

import { LoadingState } from '@/hooks/useInfiniteLoading';

import type { Movie, PersonSearchResult, TVShow } from '@/tmdb';
import type { SkeletalProps } from '@/types';
import type { LayoutItem } from '../../types';

export type MediaGridProps = SkeletalProps<
  {
    data: (TVShow | Movie | PersonSearchResult)[];
    state: LoadingState;
    viewRef: (node?: Element | null) => void;
  },
  { layout: LayoutItem }
>;

export function MediaGrid(props: MediaGridProps): JSX.Element {
  const layout = props.layout.key === 'grid' ? mediaCoverClasses.layout : mediaListClasses.layout;
  const Component = props.layout.key === 'grid' ? MediaCover : MediaList;

  if (props.skeleton) {
    return (
      <div className={layout}>
        {Array.from({ length: 20 }).map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: It's a skeleton, using the index is fine.
          <Component key={i} skeleton />
        ))}
      </div>
    );
  }

  return (
    <div className={layout}>
      {props.data.map((item) => (
        <Component key={item.id} item={item} />
      ))}

      {props.state === LoadingState.LOADING && (
        <>
          {Array.from({ length: 20 }).map((_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: It's a skeleton, using the index is fine.
            <Component key={i} skeleton />
          ))}
        </>
      )}

      {props.state === LoadingState.IDLE && <div ref={props.viewRef} />}
    </div>
  );
}
