import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';

import Searchbar from './Searchbar';
import ThemeSelector from '../components/ThemeSelector';
import UserMenu from '../components/UserMenu';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';

import { useDrawer } from '@/hooks/useDrawer';
import { useResponsive } from '@/hooks/useResponsive';
import { bgBlur } from '@/util/css';
import { styled } from '@mui/material/styles';

import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import * as constants from '@/util/constants';

interface AppBarProps extends MuiAppBarProps {
  open: boolean;
  desktop: boolean;
}

const StyledRoot = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'desktop',
})<AppBarProps>(({ theme, open, desktop }) => ({
  ...bgBlur({
    color: theme.palette.background.default,
  }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${
      open ? constants.SPACING.DRAWER.OPEN : constants.SPACING.DRAWER.CLOSED
    }px)`,
  },
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open &&
    desktop && {
      marginLeft: constants.SPACING.DRAWER.OPEN,
      width: `calc(100% - ${constants.SPACING.DRAWER.OPEN}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: constants.SPACING.MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: constants.SPACING.DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

export default function Header(props: { route: string }): JSX.Element {
  const isDesktop = useResponsive({ query: 'up', start: 'lg' });

  const drawer = useDrawer();

  return (
    <StyledRoot open={drawer.open} desktop={isDesktop}>
      <StyledToolbar>
        <IconButton
          onClick={() => drawer.to(!drawer.open)}
          sx={{
            mr: 1,
          }}
        >
          {isDesktop ? drawer.open ? <ChevronLeftIcon /> : <ChevronRightIcon /> : <MenuIcon />}
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
          <UserMenu redirect={props.route} />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
