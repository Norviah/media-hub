import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Head from 'next/head';

import { Link } from '@/components/Link';

export default function Page404(): JSX.Element {
  return (
    <>
      <Head>
        <title>404: Page Not Found</title>
      </Head>
      <Box
        sx={{
          maxWidth: 480,
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: (theme) => theme.spacing(10, 0),
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" paragraph>
          Sorry, page not found!
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
          sure to check your spelling.
        </Typography>
        <Box
          component="img"
          src="/assets/illustrations/illustration_404.svg"
          sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
        />

        <Button href="/" size="large" variant="contained" component={Link}>
          Go to Home
        </Button>
      </Box>
    </>
  );
}
