import Image from 'next/image';
import Link from 'next/link';

import { Skeleton } from '@/components/ui/Skeleton';
import { cn } from '@/lib/utils';
import { parseMedia } from '../../lib/utils';

import type { Movie, PersonSearchResult, TVShow } from '@/tmdb';
import type { SkeletalProps } from '@/types';

export const mediaCoverClasses = {
  layout:
    'grid grid-cols-3 gap-5 lg:grid-cols-5 md:grid-cols-6 sm:grid-cols-5 xl:grid-cols-6 lg:gap-x-12 lg:gap-y-5',
  container: 'space-y-3 animate-in fade-in',
  image: 'h-[167px] w-full rounded shadow-2xl lg:h-[255px] md:h-[187px] sm:h-[153px] object-fill',
  title: 'h-4 w-1/2 border border-border rounded',
} as const;

export type MediaCoverProps = SkeletalProps<{
  item: TVShow | Movie | PersonSearchResult;
}>;

export function MediaCover(props: MediaCoverProps) {
  if (props.skeleton) {
    return (
      <div className={cn(mediaCoverClasses.container)}>
        <Skeleton className={cn(mediaCoverClasses.image, 'border border-border')} />

        <Skeleton className={cn(mediaCoverClasses.title, 'border border-border')} />
      </div>
    );
  }

  const parsed = parseMedia(props.item);

  return (
    <Link href={parsed.path}>
      <div
        className={cn(
          mediaCoverClasses.container,
          'text-foreground-lighter transition-colors hover:text-foreground',
        )}
      >
        <Image
          src={parsed.poster}
          width='300'
          height='300'
          alt={parsed.poster}
          className={cn(mediaCoverClasses.image, !parsed.poster.includes('tmdb') && 'object-cover')}
        />

        <p className='text-xs'>{parsed.name}</p>
      </div>
    </Link>
  );
}
