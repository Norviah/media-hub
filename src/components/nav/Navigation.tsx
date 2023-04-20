import Logo from '@/components/Logo';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';

import RoutesContainer from './layout/RoutesContainer';

import { useDrawer } from '@/hooks/useDrawer';
import { useResponsive } from '@/hooks/useResponsive';
import { CSSObject, Theme, useTheme } from '@mui/material/styles';
import { useSession } from 'next-auth/react';

import * as constants from '@/util/constants';

const drawerWidth = constants.SPACING.DRAWER.OPEN;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  backgroundColor: theme.palette.background.default,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  overflowX: 'hidden',
  backgroundColor: theme.palette.background.default,
  width: `calc(${theme.spacing(7)} + 1px)`,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.up('sm')]: {
    width: constants.SPACING.DRAWER.CLOSED,
  },
});

export default function Navigation(): JSX.Element {
  const session = useSession();
  const isDesktop = useResponsive({ query: 'up', start: 'lg' });
  const theme = useTheme();
  const drawer = useDrawer();

  const content = (
    <>
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <Logo />
      </Box>
      <RoutesContainer open={drawer.open} authenticated={session.status === 'authenticated'} />
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: {
          lg: drawer.open ? constants.SPACING.DRAWER.OPEN : constants.SPACING.DRAWER.CLOSED,
        },
        transition: (theme) =>
          theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
      }}
    >
      {isDesktop ? (
        <>
          <MuiDrawer
            variant="permanent"
            open={drawer.open}
            anchor="left"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              whiteSpace: 'nowrap',
              boxSizing: 'border-box',
              ...(drawer.open && {
                '& .MuiDrawer-paper': openedMixin(theme),
              }),
              ...(!drawer.open && {
                '& .MuiDrawer-paper': closedMixin(theme),
              }),
            }}
          >
            {content}
          </MuiDrawer>
        </>
      ) : (
        <MuiDrawer
          open={drawer.open}
          onClose={() => drawer.to(false)}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              bgcolor: 'background.default',
              width: constants.SPACING.DRAWER.OPEN,
            },
          }}
        >
          {content}
        </MuiDrawer>
      )}
    </Box>
  );
}
