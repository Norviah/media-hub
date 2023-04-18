import { typography } from '@/theme/typography';
import { createTheme } from '@mui/material';

import * as shadows from '@/theme/shadows';
import * as overrides from '@/theme/overrides';
import * as palettes from '@/theme/palette';

import type { ThemeOptions } from '@/types/mui/ThemeOptions';
import type { Theme } from '@mui/material';
import type { Themes } from '@/types/theme';

const BASE_OPTIONS: Partial<ThemeOptions> = {
  shape: {
    borderRadius: 3,
  },
  typography,
};

export const DARK: Theme = createTheme({
  ...BASE_OPTIONS,
  palette: {
    ...palettes.DARK,
    shadows: shadows.DARK,
  },
  shadows: shadows.arrays.DARK,
  components: {
    ...overrides.DARK,
  },
});

export const LIGHT: Theme = createTheme({
  ...BASE_OPTIONS,
  palette: {
    ...palettes.LIGHT,
    shadows: shadows.LIGHT,
  },
  shadows: shadows.arrays.LIGHT,
  components: {
    ...overrides.LIGHT,
  },
});

export const DEFAULT: Themes = 'dark';
