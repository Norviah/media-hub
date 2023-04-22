import type { Components as ComponentOverrides } from '@mui/material/styles/components';

import * as shadows from '@/theme/shadows';

export const DARK: ComponentOverrides = {
  MuiAutocomplete: {
    styleOverrides: {
      paper: {
        boxShadow: shadows.DARK.z20,
      },
    },
  },
};

export const LIGHT: ComponentOverrides = {
  MuiAutocomplete: {
    styleOverrides: {
      paper: {
        boxShadow: shadows.LIGHT.z20,
      },
    },
  },
};
