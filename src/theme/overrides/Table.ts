import { SOURCE } from '@/theme/palette';
import type { Components as ComponentOverrides } from '@mui/material/styles/components';

import * as palettes from '@/theme/palette';

export const DARK: ComponentOverrides = {
  MuiTableCell: {
    styleOverrides: {
      head: {
        color: palettes.DARK.text?.secondary,
        backgroundColor: SOURCE.BLACK.dark,
      },
    },
  },
};

export const LIGHT: ComponentOverrides = {
  MuiTableCell: {
    styleOverrides: {
      head: {
        color: palettes.LIGHT.text?.secondary,
        backgroundColor: SOURCE.white.light,
      },
    },
  },
};
