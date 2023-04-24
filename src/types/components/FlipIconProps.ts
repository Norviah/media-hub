import type { SvgIconComponent } from '@mui/icons-material';
import type { SvgIconProps } from '@mui/material';

export interface FlipIconProps extends SvgIconProps {
  /**
   * Whether if the icon's respective data is active, causing the icon to flip.
   */
  active: boolean;

  /**
   * The icon to be displayed.
   */
  component: SvgIconComponent;
}
