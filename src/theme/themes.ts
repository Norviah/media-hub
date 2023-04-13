import { ComponentsOverrides } from '@/theme/overrides';
import { shadows } from '@/theme/shadows';
import { typography } from '@/theme/typography';
import { createTheme } from '@mui/material';

import * as palettes from '@/theme/palette';
import * as customShadows from '@/theme/customShadows';

import type { ThemeOptions } from '@/types/mui/ThemeOptions';
import type { Theme } from '@mui/material';

/**
 *
 */
const BASE_OPTIONS: Partial<ThemeOptions> = {
  shape: {
    borderRadius: 3,
  },
  typography,
  shadows,
};

/**
 *
 */
export const DARK: Theme = createTheme({
  ...BASE_OPTIONS,
  palette: palettes.DARK,
  customShadows: customShadows.DARK,
});

DARK.components = ComponentsOverrides(DARK);

/**
 *
 */
export const LIGHT: Theme = createTheme({
  ...BASE_OPTIONS,
  palette: palettes.LIGHT,
  customShadows: customShadows.LIGHT,
});

LIGHT.components = ComponentsOverrides(LIGHT);
