import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

import { SOURCE } from '@/theme/palette';

import type { MovieMultiDetails, TvShowMultiDetails } from '@/types/api/search/SearchResult';
import { CardMedia } from '@mui/material';

export default function MediaCard(props: {
  media: MovieMultiDetails | TvShowMultiDetails;
  last: boolean;
}) {
  const { media } = props;

  const name = media.media_type === 'movie' ? media.title : media.name;
  const date = media.media_type === 'movie' ? media.release_date : media.first_air_date;

  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  return (
    <Card>
      <CardMedia sx={{ height: 300 }}>
        {/* <CardMedia
        sx={{ height: 300 }}
        image={
          media.poster_path
            ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${media.poster_path}`
            : `/assets/images/none.png`
        }
      > */}
        <Image
          src={
            media.poster_path
              ? `https://image.tmdb.org/t/p/w500/${media.poster_path}`
              : `/assets/images/none.png`
          }
          alt={name}
          width={300}
          height={300}
          // style={{
          //   objectFit: 'cover',
          // }}
        />
      </CardMedia>

      {/* <CardContent> */}
      <Box sx={{ p: 1.5 }}>
        <Stack spacing={2}>
          <Box>
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }} noWrap>
              {date && date.length ? date : 'N/A'}
            </Typography>
          </Box>

          <Stack direction="row">
            <>
              <IconButton>
                <FavoriteIcon style={{ color: liked ? SOURCE.red.main : 'default' }} />
              </IconButton>
              <IconButton>
                <LibraryAddIcon />
              </IconButton>
            </>
            <Box sx={{ flexGrow: 1 }} />
            <Button variant="text">Details</Button>
          </Stack>
        </Stack>
      </Box>
      {/* </CardContent> */}
    </Card>
  );
}
