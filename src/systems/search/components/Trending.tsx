import { TrendingSection } from './ui';
import { Suspense } from 'react';

import { endpoints } from '@/tmdb';

export async function TrendingPage(): Promise<JSX.Element> {
  const shows = endpoints.trending.tv();
  const movies = endpoints.trending.movie();

  return (
    <div className='space-y-10'>
      <Suspense fallback={<TrendingSection header='Trending TV Shows' skeleton />}>
        <TrendingSection header='Trending TV Shows' route='/search?type=tv' promise={shows} />
      </Suspense>

      <Suspense fallback={<TrendingSection header='Trending Movies' skeleton />}>
        <TrendingSection header='Trending Movies' route='/search?type=movie' promise={movies} />
      </Suspense>
    </div>
  );
}
