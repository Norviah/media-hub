import { typography } from '@/theme/typography';
import { createTheme } from '@mui/material';

import * as shadows from '@/theme/shadows';
import * as overrides from '@/theme/overrides';
import * as palettes from '@/theme/palette';

import type { ThemeOptions } from '@/types/mui/ThemeOptions';
import type { Theme } from '@mui/material';

const BASE_OPTIONS: Partial<ThemeOptions> = {
  shape: {
    borderRadius: 3,
  },
  typography,
  shadows: shadows.array,
};

export const DARK: Theme = createTheme({
  ...BASE_OPTIONS,
  palette: palettes.DARK,
  components: {
    ...overrides.DARK,
  },
});

export const LIGHT: Theme = createTheme({
  ...BASE_OPTIONS,
  palette: palettes.LIGHT,
  components: {
    ...overrides.LIGHT,
  },
});
