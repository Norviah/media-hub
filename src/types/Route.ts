import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';

export interface Route {
  /**
   * The route's path.
   */
  path: `/${string}`;

  /**
   * The name of the path.
   *
   * This property will represent how the route is referenced in the
   * application, whether in the appbar or navigation drawer.
   */
  name: string;

  /**
   * The path's icon.
   *
   * Represents the icon that will be displayed in the appbar and
   * navigation drawer.
   */
  icon: (OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string }) | null;

  /**
   * Whether if the route should be displayed in the navigation menu.
   */
  display: boolean;

  /**
   * Whether if the route requires authentication.
   *
   * If true, the route will not be accessible in the navigation drawer if the
   * user is not authenticated. Additionally, the route itself will be
   * inaccessible if the user is not authenticated.
   */
  authentication: boolean;

  /**
   * Whether if the route should be displayed with a divider.
   */
  divider?: boolean;
}
