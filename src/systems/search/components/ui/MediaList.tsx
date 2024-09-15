import Link from 'next/link';

import { ImageCard } from '@/components/ImageCard';
import { Badge } from '@/components/ui/Badge';
import { Skeleton } from '@/components/ui/Skeleton';

import { genres } from '@/tmdb';
import { parseMedia } from '../../lib/utils';

import type { Movie, PersonSearchResult, TVShow } from '@/tmdb';
import type { SkeletalProps } from '@/types';
import { MediaType } from '../../lib';

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
        <div className='space-y-0.5'>
          <Skeleton className='h-4 w-1/3' />

          <Skeleton className='h-3 w-20' />
        </div>

        <div className='space-y-1'>
          <Skeleton className='h-3 w-1/2' />
          <Skeleton className='h-3 w-1/2' />
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
      <div className='space-y-0.5'>
        <div className='w-fit transition-colors hover:text-foreground'>
          <Link href={parsed.path}>
            <p className='text-base'>{parsed.name}</p>
          </Link>
        </div>

        <p className='text-foreground-lighter'>{parsed.year ?? 'N/A'}</p>
      </div>

      {item.media_type !== MediaType.PERSON && (
        <p className='line-clamp-2 text-foreground-light'>{item.overview ?? 'N/A'}</p>
      )}

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
