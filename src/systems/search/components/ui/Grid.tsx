'use client';

import { LoadingState } from '@/hooks';
import { Layout } from '../../lib';
import { MediaImageCard } from './MediaImageCard';
import { MediaList } from './MediaList';

import type { Movie, PersonSearchResult, TVShow } from '@/systems/tmdb';
import type { SkeletalProps } from '@/types';
import type { LayoutItem } from '../../lib';

export type GridProps = SkeletalProps<
  {
    data: (TVShow | Movie | PersonSearchResult)[];
    state: LoadingState;
    viewRef: (node?: Element | null) => void;
    layout: LayoutItem;
  },
  'layout'
>;

export function Grid({ data, state, viewRef, layout, skeleton }: GridProps): JSX.Element {
  const RenderComponent = layout.key === Layout.LIST ? MediaList : MediaImageCard;

  const className =
    layout.key === Layout.LIST
      ? 'space-y-4'
      : 'grid grid-cols-3 sm:grid-cols-4 gap-x-5 gap-y-10 md:grid-cols-5 sm:grid-cols-4 xl:grid-cols-6 sm:gap-x-8 xl:gap-x-8 xl:gap-y-10';

  if (skeleton) {
    return (
      <div className={className}>
        {Array.from({ length: 20 }).map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: skeleton.
          <RenderComponent key={i} skeleton />
        ))}
      </div>
    );
  }

  return (
    <div className='space-y-5'>
      <div className={className}>
        {data.map((item) => (
          <RenderComponent key={item.id} media={item} />
        ))}

        {state === LoadingState.LOADING &&
          // biome-ignore lint/suspicious/noArrayIndexKey: skeleton.
          Array.from({ length: 20 }).map((_, i) => <RenderComponent key={i} skeleton />)}
      </div>

      {state === LoadingState.IDLE && <div ref={viewRef} />}
    </div>
  );
}
