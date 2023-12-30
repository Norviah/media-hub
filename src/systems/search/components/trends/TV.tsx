import { Search } from 'tmdb-ts';
import { BasicMediaData } from '../../util/parse';
import { Row } from './Row';

import { getTrending } from '@/actions/tmdb';

export async function TrendingTVShows(): Promise<JSX.Element> {
  const trending: Search<BasicMediaData> | null = await getTrending<'tv'>('tv', 'week');

  if (!trending) {
    return <>Failed to get trending</>;
  }

  return <Row data={trending.results} />;
}
