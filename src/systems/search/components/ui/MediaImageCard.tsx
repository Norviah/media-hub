import Image from 'next/image';
import Link from 'next/link';

import { Skeleton } from '@/components/ui/Skeleton';
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
  height: 'lg:h-[265px] md:h-[196.183px] sm:h-[160.85px] h-[180.7px]',
  width: 'lg:w-[185px] md:w-[137.333px] sm:w-[112.6px] w-[126.5px]',
};

export function MediaImageCard(props: MediaImageCardProps) {
  const parsed = !props.skeleton ? parseMedia(props.media) : undefined;

  return parsed ? (
    <Link href={parsed.path} className='group'>
      <div className='relative'>
        <Image
          width={160}
          height={240}
          src={parsed.poster}
          alt={parsed.name}
          className={cn('w-full rounded object-cover', classes.height)}
        />

        <div
          className={cn(
            '-z-[1] absolute top-0 left-0 h-full w-full scale-90 rounded-sm bg-cover bg-no-repeat opacity-50 blur-2xl brightness-125 saturate-200 transition-all dark:opacity-30 group-hover:opacity-100',
          )}
          style={{ backgroundImage: `url(${parsed.poster})` }}
        />

        <div className='absolute inset-0 rounded bg-gradient-to-t from-black to-black/10' />
        <div className='absolute bottom-4 px-4 text-white'>
          <h2 className='font-bold'>{parsed.name}</h2>
        </div>
      </div>
    </Link>
  ) : (
    <Skeleton className={cn(classes.height, 'w-full')} />
  );
}
