import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';

import { Link } from '@/components/Link';
import { StyledNavItem, StyledNavItemIcon } from '@/components/nav/styles';
import { routes } from '@/util/routes';

import type { Route } from '@/types/Route';
import type { BoxProps } from '@mui/material';

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

export default function NavSection(props: { data: Route[]; other?: BoxProps }): JSX.Element {
  return (
    <Box {...props?.other}>
      <List sx={{ p: 1 }}>
        <Stack spacing={1}>
          {routes.map((item: Route) => (
            <NavItem key={item.name} item={item} />
          ))}
        </Stack>
      </List>
    </Box>
  );
}
