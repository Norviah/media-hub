import Link from 'next/link';

import { Header } from '@/components/ui';
import { MediaImageCard } from './MediaImageCard';

import { cn, constrictVisibility } from '@/lib/utils';

import type { Movie, SearchResult, TVShow } from '@/tmdb';
import type { SkeletalProps } from '@/types';
import type { Route } from 'next';

export type TrendingSectionProps = SkeletalProps<
  {
    header: string;
    route: Route;
    promise: Promise<SearchResult<TVShow | Movie>>;
  },
  'header'
>;

export async function TrendingSection({ skeleton, header, route, promise }: TrendingSectionProps) {
  return (
    <div className='space-y-5'>
      <div className='flex flex-row justify-between'>
        <Header type='h6' className='uppercase'>
          {header}
        </Header>

        {skeleton ? (
          <p className='text-sm'>View All</p>
        ) : (
          <Link href={route} className='transition-colors hover:text-foreground'>
            <p className='text-sm'>View All</p>
          </Link>
        )}
      </div>

      <div className='grid grid-cols-4 gap-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-5 xl:grid-cols-6'>
        {skeleton
          ? Array.from({ length: 6 }).map((_, index) => (
              <MediaImageCard
                skeleton
                // biome-ignore lint/suspicious/noArrayIndexKey: skeleton.
                key={index}
                className={cn(constrictVisibility({ index, base: 4, sm: 5, md: 6, lg: 5, xl: 6 }))}
              />
            ))
          : (await promise)?.results.slice(0, 6).map((item, index) => {
              return (
                <MediaImageCard
                  media={item}
                  key={item.id}
                  className={cn(
                    constrictVisibility({ index, base: 4, sm: 5, md: 6, lg: 5, xl: 6 }),
                  )}
                />
              );
            })}
      </div>
    </div>
  );
}
