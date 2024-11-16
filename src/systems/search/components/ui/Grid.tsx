'use client';

import { ImageCoordinator } from '@/components/image-coordination';
import { MediaImageCard } from './MediaImageCard';
import { MediaList } from './MediaList';

import { Layout } from '../../lib';
import { LoadingState } from '@/hooks';

import type { Movie, PersonSearchResult, TVShow } from '@/tmdb';
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
      : 'grid gap-4 gap-x-5 sm:gap-x-5 grid-cols-4 sm:grid-cols-5 gap-y-5 md:grid-cols-6 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 xl:gap-x-8 xl:gap-y-10';

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
    <div className='space-y-20'>
      <ImageCoordinator className={className}>
        {data.map((item) => (
          <RenderComponent key={item.id} media={item} />
        ))}

        {state === LoadingState.LOADING &&
          // biome-ignore lint/suspicious/noArrayIndexKey: skeleton.
          Array.from({ length: 20 }).map((_, i) => <RenderComponent key={i} skeleton />)}
      </ImageCoordinator>

      {state === LoadingState.IDLE && <div ref={viewRef} />}
    </div>
  );
}
