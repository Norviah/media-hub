import Label from '@/components/label/Label';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

import { SOURCE } from '@/theme/palette';
import { styled } from '@mui/material/styles';

import type { Movie } from 'tmdb-ts';
import { CardMedia } from '@mui/material';

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

export default function ShopProductCard(props: { media: Movie }) {
  // console.log(props.media);

  const { media } = props;

  // const { name, cover, price, colors, status, priceSale } = props.media;

  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      {/* <Box sx={{ pt: '100%', position: 'relative' }}> */}
      {/* <CardMedia>
        <Image
          loader={({ src }) => {
            return `${src}`;
          }}
          alt={media.title}
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${media.backdrop_path}`}
          // style={{
          //   top: 0,
          //   objectFit: 'cover',
          //   position: 'absolute',
          //   height: 'auto',
          // }}
          // width={200}
          // height={250}
        />
      </CardMedia> */}

      <Box sx={{ height: 300 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={
            media.backdrop_path
              ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${media.backdrop_path}`
              : `/assets/images/none.png`
          }
          title={media.title}
        />
      </Box>
      <Stack spacing={2} sx={{ p: 2 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {media.title}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }} noWrap>
            {'12/01/1010'}
          </Typography>
        </Link>

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
    </Card>
  );
}
