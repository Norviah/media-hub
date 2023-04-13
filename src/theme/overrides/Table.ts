import { THEME } from '@/theme/palette';

import type { ThemeOptions } from '@/types/mui/ThemeOptions';
import type { Components as ComponentOverrides } from '@mui/material/styles/components';

export function Table(theme: ThemeOptions): ComponentOverrides {
  return {
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: theme.palette.text?.secondary,
          backgroundColor: theme.palette.mode === 'light' ? THEME.WHITE.LIGHT : THEME.BLACK.DARKER,
        },
      },
    },
  };
}
