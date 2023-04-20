import { merge } from '@/util/merge';
import { alpha } from '@mui/material/styles';

import type { Components as ComponentOverrides } from '@mui/material/styles/components';

import * as palettes from '@/theme/palette';

const BASE: ComponentOverrides = {
  MuiBackdrop: {
    styleOverrides: {
      invisible: {
        background: 'transparent',
      },
    },
  },
};

export const DARK = merge(BASE, {
  MuiBackdrop: {
    styleOverrides: {
      root: {
        backgroundColor: alpha(palettes.DARK.grey[800], 0.8),
      },
    },
  },
}) as ComponentOverrides;

export const LIGHT = merge(BASE, {
  MuiBackdrop: {
    styleOverrides: {
      root: {
        backgroundColor: alpha(palettes.LIGHT.grey[800], 0.8),
      },
    },
  },
}) as ComponentOverrides;
