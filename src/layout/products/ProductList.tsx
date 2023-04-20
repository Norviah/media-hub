import { Grid } from '@mui/material';
import ShopProductCard from './ProductCard';

export default function ProductList(props: { products: any }): JSX.Element {
  return (
    <Grid container spacing={3}>
      {props.products.map((product: any) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ShopProductCard product={product} />
          {/* <ItemSkeleton /> */}
        </Grid>
      ))}
    </Grid>
  );
}
