import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';

import routes from './routes';
import { StyledNavItem, StyledNavItemIcon } from './styles';

import { Link } from '@/components/Link';
import { alpha } from '@mui/material/styles';

import type { Route } from '@/types/components/nav/Route';
import type { BoxProps } from '@mui/material';

function NavItem(props: { route: Route; open: boolean }) {
  return (
    <StyledNavItem
      component={Link}
      href={props.route.path}
      sx={{
        '&.active': {
          color: 'primary.main',
          bgcolor: (theme) => {
            return alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity);
          },
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon>{props.route.icon && <props.route.icon />}</StyledNavItemIcon>
      {props.open && <ListItemText disableTypography primary={props.route.name} />}
    </StyledNavItem>
  );
}

export default function NavSection(props: {
  authenticated: boolean;
  box?: BoxProps;
  open: boolean;
}): JSX.Element {
  return (
    <Box {...props.box}>
      <List sx={{ p: 1, pl: 2, pr: 2 }}>
        <Stack spacing={1}>
          {routes.map((route: Route) => {
            if (route.authentication && !props.authenticated) {
              return;
            }

            return <NavItem open={props.open} key={route.name} route={route} />;
          })}
        </Stack>
      </List>
    </Box>
  );
}
