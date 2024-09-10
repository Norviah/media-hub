import Link from 'next/link';

import { ImageCard } from '@/components/ImageCard';
import { Badge } from '@/components/ui/Badge';
import { Skeleton } from '@/components/ui/Skeleton';

import { genres } from '@/tmdb';
import { parseMedia } from '../../lib/utils';

import type { Movie, PersonSearchResult, TVShow } from '@/tmdb';
import type { SkeletalProps } from '@/types';
import { cn } from '@/lib/utils';

export const mediaListClasses = {
  layout: 'space-y-4',
  container: 'w-full shadow-md border border-border animate-in fade-in',
  content: 'space-y-3 px-5 py-3 justify-between',
  image: 'w-[94px] min-h-[141px] rounded-none rounded-l object-cover',
} as const;

export type MediaListProps = SkeletalProps<{
  item: TVShow | Movie | PersonSearchResult;
}>;

export function MediaList(props: MediaListProps) {
  if (props.skeleton) {
    return (
      <ImageCard classes={mediaListClasses} skeleton>
        <div className='space-y-2'>
          <Skeleton className='h-4 w-1/3' />

          <Skeleton className='h-3 w-20' />

          <div className='space-y-1'>
            <Skeleton className='h-3 w-1/2' />
            <Skeleton className='h-3 w-1/2' />
          </div>
        </div>

        <div className='flex flex-row flex-wrap gap-2'>
          <Skeleton className='h-5 w-20' />
          <Skeleton className='h-5 w-20' />
          <Skeleton className='h-5 w-20' />
        </div>
      </ImageCard>
    );
  }

  const { item } = props;
  const parsed = parseMedia(item);

  return (
    <ImageCard href={parsed.path} classes={mediaListClasses} src={parsed.poster} alt={parsed.name}>
      <div className='space-y-1'>
        <Link href={parsed.path} className='transition-colors hover:text-foreground-lighter'>
          <p className='text-base'>{parsed.name}</p>
        </Link>

        <p className='text-foreground-lighter'>{parsed.year ?? 'N/A'}</p>

        <p className='text-ellipsis text-foreground-light'>
          {item.media_type === 'person'
            ? ''
            : item.overview
              ? `${item.overview.slice(0, 300)}${item.overview.length >= 300 ? '...' : ''}`
              : 'N/A'}
        </p>
      </div>

      {item.media_type !== 'person' && (
        <div className='flex flex-row flex-wrap gap-2'>
          {item.genre_ids.map((id) => {
            const genre = genres[item.media_type].find((genre) => genre.id === id);

            if (!genre) {
              return null;
            }

            return (
              <Badge key={id} variant='muted'>
                {genre.name}
              </Badge>
            );
          })}
        </div>
      )}
    </ImageCard>
  );
}