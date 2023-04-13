import type { ThemeOptions } from '@/types/mui/ThemeOptions';
import type { Components as ComponentOverrides } from '@mui/material/styles/components';

export function Tooltip(theme: ThemeOptions): ComponentOverrides {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800],
        },
        arrow: {
          color: theme.palette.grey[800],
        },
      },
    },
  };
}
