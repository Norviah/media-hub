import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';

import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

import { SOURCE } from '@/theme/palette';

import type { PersonDetail } from 'tmdb-ts';

export default function MovieCard(props: { person: PersonDetail }) {
  const { person } = props;

  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const date = person.birthday;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardMedia
        sx={{ height: 300 }}
        // image={
        //   // media.backdrop_path
        //   //   ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${media.backdrop_path}`
        //   //   : media.poster_path
        //   //   ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${media.poster_path}`
        //   //   : `/assets/images/none.png`
        //   `/assets/images/none.png`
        // }
        // title={person.name}
      >
        <Image
          src={`/assets/images/none.png`}
          alt={person.name}
          width={300}
          height={300}
          // style={{
          //   objectFit: 'cover',
          // }}
        />
      </CardMedia>

      <Box sx={{ p: 1.5 }}>
        <Stack spacing={2}>
          <Box>
            <Typography variant="subtitle2" noWrap>
              {person.name}
            </Typography>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }} noWrap>
              {date && date.length ? date : 'N/A'}
            </Typography>
          </Box>

          <Stack direction="row">
            <Box sx={{ flexGrow: 1 }} />
            <Button variant="text">Details</Button>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
}
