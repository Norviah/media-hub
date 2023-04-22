import type { Components as ComponentOverrides } from '@mui/material/styles/components';

export const BASE: ComponentOverrides = {
  MuiRating: {
    defaultProps: {
      precision: 0.5,
    },
  },
};

export const DARK: ComponentOverrides = BASE;
export const LIGHT: ComponentOverrides = BASE;
