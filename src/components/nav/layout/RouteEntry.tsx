import ListItemText from '@mui/material/ListItemText';

import RouteIcon from '../components/RouteIcon';
import RouteItem from '../components/RouteItem';

import { alpha } from '@mui/material/styles';

import type { Route } from '@/types/components/nav/Route';

export default function RouteEntry(props: {
  route: Route;
  open: boolean;
  close: () => void;
}): JSX.Element {
  return (
    <RouteItem
      href={props.route.path}
      onClick={props.close}
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
      {props.open && <ListItemText disableTypography primary={props.route.name} />}
    </RouteItem>
  );
}
