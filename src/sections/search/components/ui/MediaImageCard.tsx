'use client';

import Link from 'next/link';

import { Skeleton } from '@/components/ui/Skeleton';
import { CoordinatedImage } from '@/components/image-coordination/CoordinatedImage';

import { cn } from '@/lib/utils';
import { parseMedia } from '../../lib';

import type { Movie, PersonSearchResult, TVShow } from '@/tmdb';
import type { SkeletalProps } from '@/types';

type MediaImageCardProps = SkeletalProps<
  {
    media: Movie | TVShow | PersonSearchResult;
    className?: string;
  },
  'className'
>;

const classes = {
  height: 'lg:h-[265px] md:h-[194.033px] h-[180.7px]',
  width: 'lg:w-[185px] md:w-[135.833px]  w-[126.5px]',
};

export function MediaImageCard({ skeleton, media, className }: MediaImageCardProps) {
  const parsed = !skeleton ? parseMedia(media) : undefined;

  return (
    <div className={cn(classes.height, 'rounded shadow-[rgba(0,0,0,.2)_0px_4px_16px]', className)}>
      {parsed ? (
        <Link href={parsed.path}>
          <CoordinatedImage
            src={parsed.poster}
            alt={parsed.name}
            className={cn('w-full rounded object-cover', classes.height, className)}
            caption={media?.media_type === 'person' && media.name}
          />
        </Link>
      ) : (
        <Skeleton className={cn(classes.height, 'w-full')} />
      )}
    </div>
  );
}
