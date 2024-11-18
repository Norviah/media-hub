'use client';

import Link from 'next/link';

import { CoordinatedImage } from '@/components/image-coordination';
import { Skeleton } from '@/components/ui';

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

export function MediaImageCard({ skeleton, media, className }: MediaImageCardProps) {
  const parsed = !skeleton ? parseMedia(media) : undefined;

  return (
    <div className={cn('group aspect-[2/3]', className)}>
      {parsed ? (
        <div className='aspect-[2/3] w-full space-y-2 rounded'>
          <Link href={parsed.path} className='shadow-[rgba(0,0,0,.2)_0px_4px_16px]'>
            <CoordinatedImage
              src={parsed.poster}
              alt={parsed.name}
              className={cn('h-full w-full rounded', className)}
              classes={{ image: 'shadow-[rgba(0,0,0,.2)_0px_4px_16px]' }}
            />
          </Link>

          <p className='font-semibold text-xs transition-colors group-hover:text-foreground-dark'>
            {parsed.name}
          </p>
        </div>
      ) : (
        <div className='aspect-[2/3] w-full space-y-2 rounded'>
          <Skeleton className={cn('h-full w-full shadow-[rgba(0,0,0,.2)_0px_4px_16px]')} />

          <Skeleton className='h-3 w-full' />
        </div>
      )}
    </div>
  );
}
