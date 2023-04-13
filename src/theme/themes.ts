import { typography } from '@/theme/typography';
import { createTheme } from '@mui/material';

import * as shadows from '@/theme/shadows';
import * as overrides from '@/theme/overrides';
import * as palettes from '@/theme/palette';

import type { ThemeOptions } from '@/types/mui/ThemeOptions';
import type { Theme } from '@mui/material';
import type { Themes } from '@/types/Themes';

const BASE_OPTIONS: Partial<ThemeOptions> = {
  shape: {
    borderRadius: 3,
  },
  typography,
};

export const DARK: Theme = createTheme({
  ...BASE_OPTIONS,
  palette: palettes.DARK,
  shadows: shadows.arrays.DARK,
  components: {
    ...overrides.DARK,
  },
});

export const LIGHT: Theme = createTheme({
  ...BASE_OPTIONS,
  palette: palettes.LIGHT,
  shadows: shadows.arrays.LIGHT,
  components: {
    ...overrides.LIGHT,
  },
});

/**
 * Gets the set color scheme from the user's system.
 *
 * `window.matchMedia` is implemented to check their system's color scheme
 * preference.
 * @returns The set color scheme from the user's system.
 */
export function systemColorScheme(): Themes {
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export const DEFAULT: Themes = 'dark';
