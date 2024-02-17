import { Search } from 'tmdb-ts';
import { Media } from '../../common/utils/media';
import { Row } from './Row';

import { getTrending } from '../../common/actions/tmdb';

export async function TrendingMovies(): Promise<JSX.Element> {
  const trending: Search<Media> | null = await getTrending<'movie'>('movie', 'week');

  if (!trending) {
    return <>Failed to get trending</>;
  }

  return <Row data={trending.results} />;
}
