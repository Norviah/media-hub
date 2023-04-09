import Link from '@/components/Link';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

import { capitalize } from '@/util/capitalize';
import { routes } from '@/util/routes';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { CSSObject, styled, Theme, useTheme } from '@mui/material/styles';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { ThemeSelector } from './ThemeSelector';
import { UserMenu } from './UserMenu';

import type { Route } from '@/types/Route';
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
);

function RenderElement(props: { data: Route; open: boolean; route: string }): JSX.Element {
  return (
    <Link
      href={props.data.path}
      key={props.data.path}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <ListItem sx={{ display: 'block' }} disablePadding>
        <ListItemButton
          selected={props.route === props.data.path}
          sx={{
            minHeight: 48,
            justifyContent: props.open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: props.open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            {props.data.icon && <props.data.icon />}
          </ListItemIcon>
          <ListItemText primary={props.data.name} sx={{ opacity: props.open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
}

export function Sidebar(props: {
  component: JSX.Element;
  route: string;
  session: Session | null;
}): JSX.Element {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {props.route !== '/_error' && capitalize(props.route)}
          </Typography>
          <ThemeSelector />
          <UserMenu redirect={props.route} />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {routes.map((route: Route) => {
            if (route.authentication ? props.session === null : false) {
              return;
            }

            return (
              <React.Fragment key={route.name}>
                {route.divider && <Divider />}
                <Link
                  href={route.path}
                  key={route.name}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <ListItem sx={{ display: 'block' }} disablePadding>
                    <ListItemButton
                      selected={props.route === route.path}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        {route.icon && <route.icon />}
                      </ListItemIcon>
                      <ListItemText primary={route.name} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              </React.Fragment>
            );
          })}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <>
          <DrawerHeader />
          {props.component}
        </>
      </Box>
    </Box>
  );
}

export default function Bottom(props: {
  component: JSX.Element;
  route: string;
  session: Session | null;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      {props.component}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={6}>
        <BottomNavigation
          showLabels
          value={props.route}
          sx={{
            height: 95,
          }}
        >
          {routes.map((obj) => {
            if (!obj.mobile || (obj.authentication ? props.session === null : false)) {
              return;
            }

            return (
              <BottomNavigationAction
                disableRipple
                LinkComponent={Link}
                label={obj.name}
                icon={obj.icon ? <obj.icon /> : undefined}
                href={obj.path}
                key={obj.name}
                value={obj.path}
              />
            );
          })}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export function Navigation(props: { component: JSX.Element; route: string; mobile: boolean }) {
  const session = useSession();

  // return props.mobile ? (
  // return <Bottom component={props.component} route={props.route} session={session} />;
  // ) : (
  //   <Sidebar component={props.component} route={props.route} />
  // );

  return (
    <>
      <Bottom component={props.component} route={props.route} session={session.data} />;
      <Sidebar component={props.component} route={props.route} session={session.data} />
    </>
  );
}
