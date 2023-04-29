import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

import { SOURCE } from '@/theme/palette';
import { CardMedia } from '@mui/material';

import type { TvShowDetails } from 'tmdb-ts';

export default function MovieCard(props: { media: TvShowDetails }) {
  const { media } = props;

  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        title={media.name}
      />

      <CardContent>
        <Stack spacing={2}>
          <Box>
            <Typography variant="subtitle2" noWrap>
              {media.name}
            </Typography>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }} noWrap>
              {media.first_air_date && media.first_air_date.length ? media.first_air_date : 'N/A'}
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
