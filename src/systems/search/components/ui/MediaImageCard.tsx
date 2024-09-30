import Image from 'next/image';
import Link from 'next/link';

import { Skeleton } from '@/components/ui/Skeleton';
import { cn } from '@/lib/utils';
import { parseMedia } from '../../lib';

import type { Movie, TVShow } from '@/tmdb';
import type { SkeletalProps } from '@/types';

type MediaImageCardProps = SkeletalProps<
  {
    media: Movie | TVShow;
    className?: string;
  },
  'className'
>;

const classes = {
  height: 'lg:h-[265px] md:h-[196.183px] sm:h-[160.85px] h-[180.7px]',
  width: 'lg:w-[185px] md:w-[137.333px] sm:w-[112.6px] w-[126.5px]',
};

export function MediaImageCard(props: MediaImageCardProps) {
  const parsed = !props.skeleton ? parseMedia(props.media) : undefined;

  return (
    <div className={cn('group space-y-2', classes.width, props.className)}>
      {parsed ? (
        <Link href={parsed.path}>
          <div className={cn('relative')}>
            <Image
              width={160}
              height={240}
              src={parsed.poster}
              alt={parsed.name}
              className={cn('rounded-sm object-cover', classes.height, classes.width)}
            />

            <div
              className={cn(
                '-z-[1] absolute top-0 left-0 h-full w-full scale-90 rounded-sm bg-cover bg-no-repeat opacity-50 blur-2xl brightness-125 saturate-200 transition-all group-hover:opacity-100',
              )}
              style={{ backgroundImage: `url(${parsed.poster})` }}
            />
          </div>
        </Link>
      ) : (
        <Skeleton className={classes.height} />
      )}

      {parsed ? (
        <p className='line-clamp-2 text-sm transition-colors group-hover:text-foreground'>
          {parsed.name}
        </p>
      ) : (
        <Skeleton className='h-[1.4em] w-full' />
      )}
    </div>
  );
}
