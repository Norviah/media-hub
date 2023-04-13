import { merge } from '@/util/merge';
import { alpha } from '@mui/material/styles';

import * as palettes from '@/theme/palette';
import * as shadows from '@/theme/shadows';

import type { Components as ComponentOverrides } from '@mui/material/styles/components';

const BASE: ComponentOverrides = {
  MuiButton: {
    styleOverrides: {
      root: {
        '&:hover': {
          boxShadow: 'none',
        },
      },
      sizeLarge: {
        height: 48,
      },
    },
  },
};

export const DARK: ComponentOverrides = merge(BASE, {
  MuiButton: {
    styleOverrides: {
      containedInherit: {
        color: palettes.DARK.grey[800],
        boxShadow: shadows.DARK.z8,
        '&:hover': {
          backgroundColor: palettes.DARK.grey[400],
        },
      },
      containedPrimary: {
        boxShadow: shadows.DARK.primary,
      },
      containedSecondary: {
        boxShadow: shadows.DARK.secondary,
      },
      outlinedInherit: {
        border: `1px solid ${alpha(palettes.DARK.grey[500], 0.32)}`,
        '&:hover': {
          backgroundColor: palettes.DARK.action?.hover,
        },
      },
      textInherit: {
        '&:hover': {
          backgroundColor: palettes.DARK.action?.hover,
        },
      },
    },
  },
});

export const LIGHT: ComponentOverrides = merge(BASE, {
  MuiButton: {
    styleOverrides: {
      containedInherit: {
        color: palettes.LIGHT.grey[800],
        boxShadow: shadows.LIGHT.z8,
        '&:hover': {
          backgroundColor: palettes.LIGHT.grey[400],
        },
      },
      containedPrimary: {
        boxShadow: shadows.LIGHT.primary,
      },
      containedSecondary: {
        boxShadow: shadows.LIGHT.secondary,
      },
      outlinedInherit: {
        border: `1px solid ${alpha(palettes.LIGHT.grey[500], 0.32)}`,
        '&:hover': {
          backgroundColor: palettes.LIGHT.action?.hover,
        },
      },
      textInherit: {
        '&:hover': {
          backgroundColor: palettes.LIGHT.action?.hover,
        },
      },
    },
  },
});
