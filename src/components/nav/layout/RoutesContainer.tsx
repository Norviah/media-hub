import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';

import routes from '../routes';
import RouteEntry from './RouteEntry';

import { BoxProps } from '@mui/material';

import type { Route } from '@/types/components/nav/Route';

export default function RoutesContainer(props: {
  authenticated: boolean;
  boxProps?: BoxProps;
  open: boolean;
}): JSX.Element {
  return (
    <Box {...props.boxProps}>
      <List sx={{ p: 1, pl: 2, pr: 2 }}>
        <Stack spacing={1}>
          {routes.map((route: Route) => {
            if (route.authentication && !props.authenticated) {
              return;
            }

            return <RouteEntry open={props.open} key={route.name} route={route} />;
          })}
        </Stack>
      </List>
    </Box>
  );
}
