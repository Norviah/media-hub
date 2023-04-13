import { merge } from '@/util/merge';
import type { Components as ComponentOverrides } from '@mui/material/styles/components';

import * as shadows from '@/theme/shadows';

const BASE: ComponentOverrides = {
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 3,
        position: 'relative',
        zIndex: 0,
      },
    },
  },
  MuiCardHeader: {
    defaultProps: {
      titleTypographyProps: {
        variant: 'h6',
      },
      subheaderTypographyProps: {
        variant: 'body2',
      },
    },
    styleOverrides: {
      root: {
        // padding: theme.spacing(3, 3, 0),
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        // padding: theme.spacing(3),
      },
    },
  },
};

export const LIGHT: ComponentOverrides = merge(BASE, {
  MuiCard: {
    styleOverrides: {
      root: {
        boxShadow: shadows.LIGHT.card,
      },
    },
  },
});

export const DARK: ComponentOverrides = merge(BASE, {
  MuiCard: {
    styleOverrides: {
      root: {
        boxShadow: shadows.DARK.card,
      },
    },
  },
});
