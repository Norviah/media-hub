import { alpha } from '@mui/material/styles';

import type { ThemeOptions } from '@/types/mui/ThemeOptions';
import type { Components as ComponentOverrides } from '@mui/material/styles/components';

export function Backdrop(theme: ThemeOptions): ComponentOverrides {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.grey[800], 0.8),
        },
        invisible: {
          background: 'transparent',
        },
      },
    },
  };
}
