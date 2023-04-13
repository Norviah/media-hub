import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

import { Link } from '@/components/Link';
import { StyledNavItem, StyledNavItemIcon } from '@/components/nav/styles';
import { routes } from '@/util/routes';

import type { Route } from '@/types/Route';

export default function NavSection({ data = [], ...other }) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {routes.map((item: Route) => (
          <NavItem key={item.name} item={item} />
        ))}
      </List>
    </Box>
  );
}

function NavItem(props: { item: Route }) {
  return (
    <StyledNavItem
      component={Link}
      href={props.item.path}
      sx={{
        '&.active': {
          color: 'primary.main',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon>{props.item.icon && <props.item.icon />}</StyledNavItemIcon>
      <ListItemText disableTypography primary={props.item.name} />
    </StyledNavItem>
  );
}
