import { alpha } from '@mui/material/styles';

import type { PaletteOptions } from '@/types/mui/ThemeOptions';

import * as colors from '@/theme/colors';

/**
 *
 */
export const THEME = { ...colors.NORD, GREY: colors.GREY };

const BASE: Omit<PaletteOptions, 'mode'> = {
  common: {
    black: '#000',
    white: '#fff',
  },
  primary: {
    main: THEME.BLUE.MAIN,
  },
  secondary: {
    main: THEME.BLUE.DARK,
  },
  info: {
    main: THEME.BLUE.LIGHT,
  },
  success: {
    main: THEME.GREEN.MAIN,
  },
  warning: {
    main: THEME.YELLOW.MAIN,
  },
  error: {
    main: THEME.RED.MAIN,
  },
  grey: THEME.GREY,
  divider: alpha(THEME.GREY[500], 0.24),
  text: {
    disabled: THEME.GREY[500],
  },
  action: {
    active: THEME.GREY[600],
    hover: alpha(THEME.GREY[500], 0.08),
    selected: alpha(THEME.GREY[500], 0.16),
    disabled: alpha(THEME.GREY[500], 0.8),
    disabledBackground: alpha(THEME.GREY[500], 0.24),
    focus: alpha(THEME.GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

/**
 *
 */
export const LIGHT: PaletteOptions = {
  ...BASE,
  mode: 'light',
  divider: alpha(THEME.GREY[500], 0.24),
  background: {
    default: THEME.GREY[100],
  },
  text: {
    primary: THEME.GREY[700],
    secondary: THEME.GREY[600],
    disabled: THEME.GREY[500],
  },
};

/**
 * The dark theme.
 */
export const DARK: PaletteOptions = {
  ...BASE,
  mode: 'dark',
  divider: THEME.BLACK.LIGHT,
  background: {
    paper: THEME.BLACK.MAIN,
    default: THEME.BLACK.DARKER,
  },
  text: {
    primary: THEME.GREY[200],
    secondary: THEME.GREY[500],
    disabled: THEME.GREY[500],
  },
};
