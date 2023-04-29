import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

import { SOURCE } from '@/theme/palette';

import { CardContent, CardMedia } from '@mui/material';
import type { MovieDetails } from 'tmdb-ts';

export default function MovieCard(props: { media: MovieDetails }) {
  console.log(props.media);

  const { media } = props;

  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  return (
    <Card>
      <CardMedia
        sx={{ height: 300 }}
        image={
          media.backdrop_path
            ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${media.backdrop_path}`
            : media.poster_path
            ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${media.poster_path}`
            : `/assets/images/none.png`
        }
        title={media.title}
      />

      <CardContent>
        <Stack spacing={2}>
          <Box>
            <Typography variant="subtitle2" noWrap>
              {media.title}
            </Typography>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }} noWrap>
              {media.release_date && media.release_date.length ? media.release_date : 'N/A'}
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
      </CardContent>
    </Card>
  );
}
