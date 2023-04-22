import type { Components as ComponentOverrides } from '@mui/material/styles/components';

import * as palettes from '@/theme/palette';

export const DARK: ComponentOverrides = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: palettes.SOURCE.BLACK.medium,
      },
      arrow: {
        color: palettes.SOURCE.BLACK.medium,
      },
    },
  },
};

export const LIGHT: ComponentOverrides = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: palettes.SOURCE.grey[600],
      },
      arrow: {
        color: palettes.SOURCE.grey[600],
      },
    },
  },
};
