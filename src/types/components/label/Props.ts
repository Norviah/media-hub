import type { SvgIconComponent } from '@mui/icons-material';
import type { SxProps } from '@mui/material/styles';

export interface BaseLabelProps {
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'default';
  variant: 'filled' | 'outlined' | 'soft';
  spacing: {
    top?: number;
    right?: number;
    left?: number;
    bottom?: number;
  };
  sx?: SxProps;
}

export interface LabelProps extends BaseLabelProps {
  data: string | SvgIconComponent;
  icons?: {
    start?: SvgIconComponent;
    end?: SvgIconComponent;
  };
}
