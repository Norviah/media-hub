import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';
import Searchbar from './Searchbar';

import { styled } from '@mui/material/styles';
import { bgBlur } from '@/util/css';
import { ThemeSelector } from '@/components/header';

import * as constants from '@/util/constants';

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({
    color: theme.palette.background.default,
  }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${constants.SPACING.NAV + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: constants.SPACING.MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: constants.SPACING.DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

export function Header({ onOpenNav }) {
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            display: {
              lg: 'none',
            },
          }}
        >
          <MenuIcon />
        </IconButton>

        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <ThemeSelector />
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
