import type { Components as ComponentOverrides } from '@mui/material/styles/components';

import * as palettes from '@/theme/palette';

export const DARK: ComponentOverrides = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: palettes.THEME.BLACK.MEDIUM,
      },
      arrow: {
        color: palettes.THEME.BLACK.MEDIUM,
      },
    },
  },
};

export const LIGHT: ComponentOverrides = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: palettes.THEME.GREY[600],
      },
      arrow: {
        color: palettes.THEME.GREY[600],
      },
    },
  },
};
