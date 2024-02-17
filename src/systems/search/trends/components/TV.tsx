import { Search } from 'tmdb-ts';
import { Row } from './Row';

import { getTrending } from '../../common/actions';

import type { Media } from '../../common/utils';

export async function TrendingTVShows(): Promise<JSX.Element> {
  const trending: Search<Media> | null = await getTrending<'tv'>('tv', 'week');

  if (!trending) {
    return <>Failed to get trending</>;
  }

  return <Row data={trending.results} />;
}
