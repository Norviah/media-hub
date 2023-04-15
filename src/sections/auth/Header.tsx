import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import Logo from '@/components/Logo';
import Stack from '@mui/material/Stack';

import { Link } from '@/components/Link';
import { ThemeSelector } from '@/components/header';

export function Header(): JSX.Element {
  return (
    <>
      <Grid container justifyContent="flex-end" sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <Logo />
        <Box sx={{ flexGrow: 1 }} />
        <Stack spacing={1} direction="row">
          <ThemeSelector />
          <Link href="/">
            <IconButton>
              <HomeIcon fontSize="medium" />
            </IconButton>
          </Link>
        </Stack>
      </Grid>
    </>
  );
}
