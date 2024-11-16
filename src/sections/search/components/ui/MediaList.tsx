import Link from 'next/link';

import { ImageCard } from '@/components/ImageCard';
import { Badge } from '@/components/ui/Badge';
import { Skeleton } from '@/components/ui/Skeleton';

import { genres } from '@/tmdb';
import { MediaType } from '../../lib';
import { parseMedia } from '../../lib/utils';

import type { Movie, PersonSearchResult, TVShow } from '@/tmdb';
import type { SkeletalProps } from '@/types';

export const mediaListClasses = {
  layout: 'space-y-4',
  container: 'w-full border border-border animate-in fade-in h-[141px]',
  content: 'space-y-3 px-5 py-3 justify-between',
  image: 'w-[94px] min-h-[141px] rounded-none rounded-l object-cover',
} as const;

export type MediaListProps = SkeletalProps<{
  media: TVShow | Movie | PersonSearchResult;
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

  const { media: item } = props;
  const parsed = parseMedia(item);

  return (
    <ImageCard
      coordinated
      href={parsed.path}
      classes={mediaListClasses}
      src={parsed.poster}
      alt={parsed.name}
    >
      <div className='space-y-0.5'>
        <div className='w-fit transition-colors hover:text-card-foreground'>
          <Link href={parsed.path}>
            <p className='text-base text-card-foreground-dark'>{parsed.name}</p>
          </Link>
        </div>

        <p className='text-card-foreground-light'>{parsed.year ?? 'N/A'}</p>
      </div>

      {item.media_type !== MediaType.PERSON && (
        <p className='line-clamp-2 text-card-foreground'>{item.overview ?? 'N/A'}</p>
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
