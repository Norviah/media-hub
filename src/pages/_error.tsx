import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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
          An unknown error has occurred!
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Sorry, an unknown error has occurred. Please try again later.
        </Typography>

        <Box sx={{ pt: 5 }}>
          <Button href="/" size="large" variant="contained" component={Link}>
            Go to Home
          </Button>
        </Box>
      </Box>
    </>
  );
}
