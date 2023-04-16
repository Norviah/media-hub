import Label from '@/components/label/Label';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

import { THEME } from '@/theme/palette';
import { styled } from '@mui/material/styles';

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

export default function ShopProductCard({ product }) {
  const { name, cover, price, colors, status, priceSale } = product;

  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
        <StyledProductImg alt={name} src={cover} />
      </Box>

      {/* <Image
          loader={({ src }) => {
            return `${src}`;
          }}
          alt={name}
          src={
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/n30CBH4BoN5Z34tCpOWIPGJYOaS.jpg'
          }
          style={{
            top: 0,
            objectFit: 'cover',
            position: 'absolute',
          }}
          width={300}
          height={400}
        /> */}

      <Stack spacing={2} sx={{ p: 2 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }} noWrap>
            {'12/01/1010'}
          </Typography>
        </Link>

        <Stack direction="row">
          {/* <FavoriteIcon /> */}
          <>
            <IconButton>
              <FavoriteIcon style={{ color: liked ? THEME.RED.MAIN : 'default' }} />
            </IconButton>
            <IconButton>
              <LibraryAddIcon />
            </IconButton>
          </>
          <Box sx={{ flexGrow: 1 }} />
          <Button variant="text">Details</Button>
        </Stack>

        {/* <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {priceSale && fCurrency(priceSale)}
              {'$$$'}
            </Typography>
            &nbsp;
            {fCurrency(price)}
            {'$$$'}
          </Typography>
          <Button variant="contained">Details</Button>
        </Stack> */}
      </Stack>
    </Card>

    // <Card>
    //   <Link href="/movie/123">
    //     <CardMedia
    //       style={{
    //         // height: 0,
    //         paddingTop: '150%',
    //         position: 'relative',
    //       }}
    //       sx={{
    //         ':hover': {
    //           filter: 'brightness(80%)',
    //           transition: 'all .1s',
    //         },
    //       }}
    //       image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/n30CBH4BoN5Z34tCpOWIPGJYOaS.jpg"
    //     >
    //       <div
    //         style={{
    //           position: 'absolute',
    //           bottom: 0,
    //           left: 0,
    //           right: 0,
    //           top: 0,
    //           background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.55))',
    //         }}
    //       />
    //       <CardContent
    //         style={{
    //           position: 'absolute',
    //           bottom: 0,
    //           left: 0,
    //           right: 0,
    //           padding: 16,
    //           color: 'white',
    //         }}
    //       >
    //         <Typography variant="h5">Made In Abyss</Typography>
    //       </CardContent>
    //     </CardMedia>
    //   </Link>
    //   <CardActions disableSpacing>
    //     <div style={{ position: 'relative' }}>
    //       <IconButton
    //         aria-label="add to favorites"
    //         onClick={async () => {
    //           setLoading(true);
    //           await new Promise((resolve) => setTimeout(resolve, 1500));
    //           setLiked(!liked);
    //           setLoading(false);
    //           enqueueSnackbar(
    //             `${!liked ? 'Added' : 'Removed'} 'Made In Abyss' ${
    //               !liked ? 'to' : 'from'
    //             } your favorites`,
    //             {
    //               variant: 'success',
    //             }
    //           );
    //         }}
    //         disabled={loading}
    //       >
    //         {loading ? (
    //           <CircularProgress
    //             style={{
    //               position: 'absolute',
    //               top: '50%',
    //               left: '50%',
    //               marginTop: -12,
    //               marginLeft: -12,
    //             }}
    //             size={24}
    //           />
    //         ) : null}
    //         <FavoriteIcon
    //           style={{
    //             color: loading ? THEME.BLACK.MEDIUM : liked ? THEME.RED.MAIN : undefined,
    //           }}
    //         />
    //       </IconButton>
    //     </div>
    //     {/* <LoadingButton
    //       startIcon={<FavoriteIcon />}
    //       loading={loading}
    //       onClick={async () => {
    //         setLoading(true);
    //         await new Promise((resolve) => setTimeout(resolve, 1500));
    //         setLiked(!liked);
    //         setLoading(false);
    //       }}
    //     /> */}
    //     <IconButton aria-label="share">
    //       <LibraryAddIcon />
    //     </IconButton>
    //     <Box sx={{ flexGrow: 1 }} />
    //     <IconButton onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
    //       <FlipIcon icon={ExpandMoreIcon} open={expanded} />
    //     </IconButton>
    //   </CardActions>
    //   <Collapse in={expanded} timeout="auto" unmountOnExit>
    //     <CardContent>
    //       <Typography variant="h6">Overview</Typography>
    //       <Typography paragraph sx={{ color: 'text.secondary' }}>
    //         ousei Arima was a genius pianist until his mother's sudden death took away his ability
    //         to play. Each day was dull for Kousei. But, then he meets a violinist named Kaori
    //         Miyazono who has an eccentric playing style. Can the heartfelt sounds of the girl's
    //         violin lead the boy to play the piano again?
    //       </Typography>
    //       <Button variant="contained" color="primary">
    //         More
    //       </Button>
    //     </CardContent>
    //   </Collapse>
    // </Card>

    // <Card>
    //   {/* <CardMedia
    //     sx={{ height: 300, width: 300, objectFit: 'fill' }}
    //     image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/IGbeFv5Ji4W0x530JcSHiQpamY.jpg"
    //     // image="https://www.themoviedb.org/t/p/w500/IGbeFv5Ji4W0x530JcSHiQpamY.jpg"
    //     title="Your Lie In April"
    //   /> */}
    //   <CardMedia
    //     component="img"
    //     image="https://www.themoviedb.org/t/p/original/IGbeFv5Ji4W0x530JcSHiQpamY.jpg"
    //     alt="Image"
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       Your Lie In April
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    //       across all continents except Antarctica
    //     </Typography>
    //   </CardContent>
    //   <Divider />
    //   <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', m: 1 }}>
    //     <Stack direction="row">
    //       <IconButton onClick={() => setLiked(!liked)}>
    //         <FavoriteIcon style={{ color: liked ? THEME.RED.MAIN : undefined }} />
    //       </IconButton>
    //       <IconButton>
    //         <LibraryAddIcon />
    //       </IconButton>
    //     </Stack>
    //     <Box sx={{ flexGrow: 1 }} />
    //     <Button variant="contained">More</Button>
    //   </CardActions>
    // </Card>

    // <Card>
    //   <CardMedia
    //     component="img"
    //     image="https://www.themoviedb.org/t/p/original/IGbeFv5Ji4W0x530JcSHiQpamY.jpg"
    //     alt={'your lie in april'}
    //     // height="200"
    //   />
    //   <CardContent sx={{ height: 150, overflow: 'hidden', textOverflow: 'ellipsis' }}>
    //     <Typography gutterBottom variant="h5" component="div">
    //       Your Lie In April
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       {Lorem.slice(0, Math.floor(Math.random() * 400) + 1).join(' ')}
    //     </Typography>
    //   </CardContent>
    //   <Divider />
    //   <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', m: 1 }}>
    //     <Stack direction="row">
    //       <IconButton onClick={() => setLiked(!liked)}>
    //         <FavoriteIcon style={{ color: liked ? THEME.RED.MAIN : undefined }} />
    //       </IconButton>
    //       <IconButton>
    //         <LibraryAddIcon />
    //       </IconButton>
    //     </Stack>
    //     <Box sx={{ flexGrow: 1 }} />
    //     <Button variant="contained">More</Button>
    //   </CardActions>
    // </Card>
  );
}
