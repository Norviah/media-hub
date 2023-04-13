import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import Logo from '@/components/logo/Logo';

import { ThemeSelector } from '@/components/header/ThemeSelector';

import type { NextRouter } from 'next/router';

export function Header(props: { router: NextRouter }): JSX.Element {
  return (
    <>
      <Grid container justifyContent="flex-end" style={{ padding: 10 }}>
        <Box>
          <Logo />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Grid item>
          <ThemeSelector sx={{ color: 'text.primary' }} />
          <IconButton onClick={() => props.router.push('/')}>
            <HomeIcon sx={{ color: 'text.primary' }} />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}
