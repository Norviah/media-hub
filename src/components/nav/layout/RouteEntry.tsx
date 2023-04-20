import ListItemText from '@mui/material/ListItemText';

import RouteIcon from '../components/RouteIcon';
import RouteItem from '../components/RouteItem';

import { alpha } from '@mui/material/styles';

import type { DrawerContext } from '@/types/hooks/DrawerContext';
import type { Route } from '@/types/components/nav/Route';

export default function RouteEntry(props: {
  route: Route;
  drawer: DrawerContext;
  isDesktop: boolean;
}): JSX.Element {
  return (
    <RouteItem
      href={props.route.path}
      onClick={() => (props.isDesktop ? undefined : props.drawer.to(false))}
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
      {props.route.icon && (
        <RouteIcon>
          <props.route.icon />
        </RouteIcon>
      )}
      {props.drawer.open && <ListItemText disableTypography primary={props.route.name} />}
    </RouteItem>
  );
}
