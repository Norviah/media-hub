import { alpha } from '@mui/material/styles';

import type { PaletteOptions } from '@/types/mui/ThemeOptions';

import * as colors from '@/theme/colors';

/**
 *
 */
export const THEME = colors.NORD;

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
  grey: colors.GREY,
  divider: alpha(colors.GREY[500], 0.24),
  text: {
    disabled: colors.GREY[500],
  },
  action: {
    active: colors.GREY[600],
    hover: alpha(colors.GREY[500], 0.08),
    selected: alpha(colors.GREY[500], 0.16),
    disabled: alpha(colors.GREY[500], 0.8),
    disabledBackground: alpha(colors.GREY[500], 0.24),
    focus: alpha(colors.GREY[500], 0.24),
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
  divider: alpha(colors.GREY[500], 0.24),
  background: {
    default: colors.GREY[100],
  },
  text: {
    primary: colors.GREY[700],
    secondary: colors.GREY[600],
    disabled: colors.GREY[500],
  },
};

/**
 * The dark theme.
 */
export const DARK: PaletteOptions = {
  ...BASE,
  mode: 'dark',
  divider: alpha(colors.GREY[600], 0.24),
  background: {
    paper: THEME.BLACK.DARK,
    default: THEME.BLACK.DARKER,
  },
  text: {
    primary: colors.GREY[200],
    secondary: colors.GREY[500],
    disabled: colors.GREY[500],
  },
};
