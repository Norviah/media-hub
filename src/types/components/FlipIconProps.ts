import type { SvgIconProps, SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';

export interface FlipIconProps extends SvgIconProps {
  /**
   * Whether if the icon's respective data is active, causing the icon to flip.
   */
  active: boolean;

  /**
   * The icon to be displayed.
   */
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
}
