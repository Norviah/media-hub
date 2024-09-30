import Link from 'next/link';

import { Header } from '@/components/ui/Header';
import { MediaImageCard } from './MediaImageCard';

import { cn, constrictVisibility } from '@/lib/utils';

import type { Movie, SearchResult, TVShow } from '@/tmdb';
import type { SkeletalProps } from '@/types';
import type { Route } from 'next';

export type TrendingSectionProps = SkeletalProps<
  {
    header: string;
    route: Route;
    data: SearchResult<TVShow | Movie>;
  },
  'header'
>;

export function TrendingSection({ skeleton, header, route, data }: TrendingSectionProps) {
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

      <div className='flex flex-row justify-between gap-4'>
        {skeleton
          ? Array.from({ length: 6 }).map((_, index) => (
              <MediaImageCard
                skeleton
                // biome-ignore lint/suspicious/noArrayIndexKey: skeleton.
                key={index}
                className={cn(constrictVisibility({ index, base: 4, sm: 5, md: 6, lg: 5, xl: 6 }))}
              />
            ))
          : data?.results.slice(0, 6).map((item, index) => {
              return (
                <MediaImageCard
                  media={item}
                  key={item.id}
                  className={cn(
                    constrictVisibility({ index, base: 4, sm: 5, md: 6, lg: 5, xl: 6 }),
                    'h-fit 2xl:h-fit lg:h-fit md:h-fit sm:h-fit xl:h-fit',
                  )}
                />
              );
            })}
      </div>
    </div>
  );
}
