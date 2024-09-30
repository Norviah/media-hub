import { endpoints } from '@/tmdb';
import { TrendingSection } from './ui';

export async function TrendingPage(): Promise<JSX.Element> {
  const shows = await endpoints.trending.tv();
  const movies = await endpoints.trending.movie();

  return (
    <div className='space-y-10'>
      <TrendingSection header='Trending TV Shows' route='/search?type=tv' data={shows} />

      <TrendingSection header='Trending Movies' route='/search?type=movie' data={movies} />
    </div>
  );
}
