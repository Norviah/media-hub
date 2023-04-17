import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Label from '@/components/label/Label';

import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import { styled } from '@mui/material/styles';
import { fCurrency } from '@/util/currency';
import { enqueueSnackbar } from 'notistack';
import { THEME } from '@/theme/palette';
import { FlipIcon } from '@/components/FlipIcon';
import { CardActionArea, Divider, Grid } from '@mui/material';
import { FavoriteBorderOutlined, ShareOutlined } from '@mui/icons-material';
import ShopProductCard from './ProductCard';
import { ItemSkeleton } from './ItemSkeleton';

const showImageUrl = 'https://www.themoviedb.org/t/p/original/IGbeFv5Ji4W0x530JcSHiQpamY.jpg';

const Lorem =
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut sem in diam sollicitudin tincidunt. Fusce rhoncus metus quis posuere ultricies. Praesent ut lorem vel ex mollis laoreet a ut nisl. Sed molestie felis ut sollicitudin lobortis. Quisque laoreet urna eget pulvinar volutpat. Donec in porta ligula. Nam at lobortis ex. Aenean ornare arcu quam, quis fermentum eros pellentesque sed. Ut eget neque nisi. Nam hendrerit massa non euismod aliquam. Nunc dui leo, euismod ac arcu nec, porta congue ex. Nulla ut eros eu justo feugiat consectetur varius tincidunt nunc. Curabitur neque tellus, mattis nec turpis ut, eleifend sagittis tortor. Mauris et lacus eu quam facilisis dictum in nec nulla. Fusce ac ultricies orci. Vestibulum nulla lacus, tempor sollicitudin gravida porttitor, lobortis et eros. Cras quis molestie magna. Duis felis felis, molestie in lectus at, imperdiet semper nisi. Curabitur vitae varius enim, non tincidunt dolor. Nunc in tortor suscipit, semper augue id, consectetur dui. Proin ullamcorper finibus lorem in sodales. Nunc eget elementum mauris, at malesuada erat. Curabitur porttitor lacus ut tortor maximus tristique. Fusce ac odio eget dui dictum dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eu lobortis lacus. Vivamus id mauris varius, venenatis risus non, maximus orci. Suspendisse ultricies varius odio, a lacinia massa ullamcorper ac. Donec mollis, quam at hendrerit suscipit, ipsum neque rutrum erat, eu efficitur turpis dui eu quam. Donec in lacus felis. Sed nec odio et mauris gravida interdum. Maecenas feugiat magna augue, nec dapibus ante convallis a. Integer et magna et est viverra iaculis ac nec justo. Pellentesque cursus urna non ultricies malesuada. Mauris pharetra, erat ac gravida dapibus, orci tellus eleifend nulla, ut sollicitudin nunc elit non lorem. Quisque lobortis tincidunt mi, vitae gravida augue aliquam efficitur. Vivamus et nisi dapibus, ullamcorper erat hendrerit, vulputate quam. Duis sodales eget sapien ut vehicula. Nunc tincidunt dui nibh, sit amet euismod nisl commodo non. Maecenas diam eros, ornare nec scelerisque in, fringilla ut enim. Nullam sit amet mi sit amet urna elementum egestas. Donec consectetur turpis leo, quis facilisis arcu maximus quis. Donec ut aliquet velit, vitae dapibus sapien. Nullam aliquam, elit ac facilisis maximus, urna lorem rutrum leo, et ultricies sem leo sed purus. Aliquam auctor ante erat. Nam sed enim ultrices lacus tempor scelerisque porta eget diam. Mauris ullamcorper sapien fringilla, maximus nisi non, facilisis turpis. Suspendisse ac mauris lorem. Quisque nec maximus felis. Nullam ac sapien mattis, consectetur massa nec, tincidunt magna. Nam non est aliquet, pulvinar libero egestas, consequat odio. Suspendisse feugiat urna ut nulla venenatis, quis convallis ex tristique. Etiam in enim varius, pretium nisi fringilla, efficitur tellus. Sed nisi arcu, dictum eget eros at, tempor pretium arcu. Phasellus varius id lorem a finibus. Cras semper nec elit ac lobortis. Nulla facilisi. Etiam consectetur at mauris ac rhoncus. Nunc malesuada justo ut nisl tincidunt vestibulum. Aliquam id lorem fringilla, vulputate lectus ac, facilisis ex. Vestibulum euismod cursus arcu, posuere volutpat sem fringilla ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra accumsan facilisis. `.split(
    ' '
  );

export default function ProductList({ products, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ShopProductCard product={product} />
          {/* <ItemSkeleton /> */}
        </Grid>
        // <Grid key={product.id} item xs={12} sm={6} md={4}>
        //   <ShopProductCard product={product} />
        //   {/* <ItemSkeleton /> */}
        // </Grid>

        // <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
        // <Grid item xs={12} sm={6} md={3} key={product.id}>
        //   <Card>
        //     <CardMedia
        //       component="img"
        //       image="https://www.themoviedb.org/t/p/original/IGbeFv5Ji4W0x530JcSHiQpamY.jpg"
        //       alt={'d'}
        //       height="200"
        //       style={{ objectFit: 'cover' }}
        //     />
        //     <CardContent sx={{ height: 200 }}>
        //       <Typography variant="h6">{'d'}</Typography>
        //       <Typography variant="body2" color="text.secondary">
        //         {Lorem.slice(0, Math.floor(Math.random() * 400) + 1).join(' ')}
        //       </Typography>
        //     </CardContent>
        //   </Card>
        // </Grid>
      ))}
    </Grid>
  );
}
