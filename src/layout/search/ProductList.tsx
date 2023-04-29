import MediaCard from './components/MediaCard';
import Skeleton from './components/Skeleton';
import PersonCard from './components/PersonCard';

import { Grid } from '@mui/material';

import type { SearchResult } from '@/types/api/search/SearchResult';

export default function ProductList(props: { items: SearchResult['results'] | null }): JSX.Element {
  return props.items ? (
    <Grid container spacing={3}>
      {props.items.map((item, index) => (
        <Grid key={item.id} item xs={12} sm={6} md={3}>
          {item.media_type === 'movie' || item.media_type === 'tv' ? (
            <MediaCard media={item} last={index === props.items!.length - 1} />
          ) : (
            <PersonCard person={item} />
          )}
        </Grid>
      ))}
    </Grid>
  ) : (
    <Grid container spacing={3}>
      {Array(20)
        .fill(<Skeleton />)
        .map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Skeleton />
          </Grid>
        ))}
    </Grid>
  );
}
