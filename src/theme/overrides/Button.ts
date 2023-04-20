import { merge } from '@/util/merge';
import { alpha } from '@mui/material/styles';

import * as palettes from '@/theme/palette';
import * as shadows from '@/theme/shadows';

import type { Components as ComponentOverrides } from '@mui/material/styles/components';

const BASE: ComponentOverrides = {
  MuiButton: {
    styleOverrides: {
      sizeLarge: {
        height: 48,
      },
    },
  },
};

export const DARK = merge(BASE, {
  MuiButton: {
    styleOverrides: {
      containedInherit: {
        color: palettes.DARK.grey[800],
        boxShadow: shadows.DARK.z8,
        '&:hover': {
          backgroundColor: palettes.DARK.grey[400],
        },
      },
      containedError: {
        boxShadow: shadows.DARK.error.main,
        '&:hover': {
          boxShadow: shadows.DARK.error.hover,
        },
        '&:active': {
          boxShadow: shadows.DARK.error.active,
          transition: 'box-shadow 0.1s',
        },
      },
      containedWarning: {
        boxShadow: shadows.DARK.warning.main,
        '&:hover': {
          boxShadow: shadows.DARK.warning.hover,
        },
        '&:active': {
          boxShadow: shadows.DARK.warning.active,
          transition: 'box-shadow 0.1s',
        },
      },
      containedInfo: {
        boxShadow: shadows.DARK.info.main,
        '&:hover': {
          boxShadow: shadows.DARK.info.hover,
        },
        '&:active': {
          boxShadow: shadows.DARK.info.active,
          transition: 'box-shadow 0.1s',
        },
      },
      containedSuccess: {
        boxShadow: shadows.DARK.success.main,
        '&:hover': {
          boxShadow: shadows.DARK.success.hover,
        },
        '&:active': {
          boxShadow: shadows.DARK.success.active,
          transition: 'box-shadow 0.1s',
        },
      },
      containedPrimary: {
        boxShadow: shadows.DARK.primary.main,
        '&:hover': {
          boxShadow: shadows.DARK.primary.hover,
        },
        '&:active': {
          boxShadow: shadows.DARK.primary.active,
          transition: 'box-shadow 0.1s',
        },
      },
      containedSecondary: {
        boxShadow: shadows.DARK.secondary.main,
        '&:hover': {
          boxShadow: shadows.DARK.secondary.hover,
        },
        '&:active': {
          boxShadow: shadows.DARK.secondary.active,
          transition: 'box-shadow 0.1s',
        },
      },
      outlinedInherit: {
        border: `1px solid ${alpha(palettes.DARK.grey[500], 0.32)}`,
        '&:hover': {
          ackgroundColor: palettes.DARK.action?.hover,
        },
      },
      textInherit: {
        '&:hover': {
          backgroundColor: palettes.DARK.action?.hover,
        },
      },
    },
  },
}) as ComponentOverrides;

export const LIGHT = merge(BASE, {
  MuiButton: {
    styleOverrides: {
      containedInherit: {
        color: palettes.LIGHT.grey[800],
        boxShadow: shadows.LIGHT.z8,
        '&:hover': {
          backgroundColor: palettes.LIGHT.grey[400],
        },
      },
      containedError: {
        boxShadow: shadows.LIGHT.error.main,
        '&:hover': {
          boxShadow: shadows.LIGHT.error.hover,
        },
        '&:active': {
          boxShadow: shadows.LIGHT.error.active,
          transition: 'box-shadow 0.1s',
        },
      },
      containedWarning: {
        boxShadow: shadows.LIGHT.warning.main,
        '&:hover': {
          boxShadow: shadows.LIGHT.warning.hover,
        },
        '&:active': {
          boxShadow: shadows.LIGHT.warning.active,
          transition: 'box-shadow 0.1s',
        },
      },
      containedInfo: {
        boxShadow: shadows.LIGHT.info.main,
        '&:hover': {
          boxShadow: shadows.LIGHT.info.hover,
        },
        '&:active': {
          boxShadow: shadows.LIGHT.info.active,
          transition: 'box-shadow 0.1s',
        },
      },
      containedSuccess: {
        boxShadow: shadows.LIGHT.success.main,
        '&:hover': {
          boxShadow: shadows.LIGHT.success.hover,
        },
        '&:active': {
          boxShadow: shadows.LIGHT.success.active,
          transition: 'box-shadow 0.1s',
        },
      },
      containedPrimary: {
        boxShadow: shadows.LIGHT.primary.main,
        '&:hover': {
          boxShadow: shadows.LIGHT.primary.hover,
        },
        '&:active': {
          boxShadow: shadows.LIGHT.primary.active,
          transition: 'box-shadow 0.1s',
        },
      },
      containedSecondary: {
        boxShadow: shadows.LIGHT.secondary.main,
        '&:hover': {
          boxShadow: shadows.LIGHT.secondary.hover,
        },
        '&:active': {
          boxShadow: shadows.LIGHT.secondary.active,
          transition: 'box-shadow 0.1s',
        },
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
}) as ComponentOverrides;
