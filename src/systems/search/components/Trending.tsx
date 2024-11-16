import { ImageCoordinator } from '@/systems/image-coordination';
import { Suspense } from 'react';
import { TrendingSection } from './ui';

import { endpoints } from '@/tmdb';

export async function TrendingPage(): Promise<JSX.Element> {
  const shows = endpoints.trending.tv();
  const movies = endpoints.trending.movie();

  return (
    <ImageCoordinator className='space-y-10'>
      <Suspense fallback={<TrendingSection header='Trending TV Shows' skeleton />}>
        <TrendingSection header='Trending TV Shows' route='/search?type=tv' promise={shows} />
      </Suspense>

      <Suspense fallback={<TrendingSection header='Trending Movies' skeleton />}>
        <TrendingSection header='Trending Movies' route='/search?type=movie' promise={movies} />
      </Suspense>
    </ImageCoordinator>
  );
}
