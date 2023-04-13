import type { Components as ComponentOverrides } from '@mui/material/styles/components';

export const BASE = {
  MuiPaper: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: {
        backgroundImage: 'none',
      },
    },
  },
};

export const DARK: ComponentOverrides = BASE;
export const LIGHT: ComponentOverrides = BASE;
