import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Head from 'next/head';

import PRODUCTS from '@/components/_mock/products';
import { ProductFilterSidebar, ProductList, ProductSort } from '@/layout/products';
import { useState } from 'react';

export default function ProductsPage(): JSX.Element {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <>
      <Head>
        <title>Search</title>
      </Head>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Search
        </Typography>
        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        >
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar open={openFilter} to={(value: boolean) => setOpenFilter(value)} />
            <ProductSort />
          </Stack>
        </Stack>

        <ProductList products={PRODUCTS} />
      </Container>
    </>
  );
}
