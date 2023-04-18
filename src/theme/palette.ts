import { alpha } from '@mui/material/styles';
import { NORD, GREY } from '@/theme/colors';
import { merge } from '@/util/merge';

import type { PaletteOptions } from '@/types/mui';

export const THEME = { ...NORD, GREY };

export const BASE = {
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
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    selectedOpacity: 0.2,
  },
} as const;

export const LIGHT: PaletteOptions = merge<PaletteOptions>(BASE as PaletteOptions, {
  mode: 'light',
  divider: alpha(THEME.GREY[500], 0.25),
  background: {
    default: THEME.GREY[200],
  },
  text: {
    primary: THEME.GREY[700],
    secondary: THEME.GREY[600],
    disabled: THEME.GREY[500],
  },
  action: {
    active: BASE.grey[600],
    hover: alpha(BASE.grey[500], 0.08),
    selected: alpha(BASE.primary.main, BASE.action.selectedOpacity),
    disabled: alpha(BASE.grey[500], 0.8),
    disabledBackground: alpha(BASE.grey[500], 0.24),
    focus: alpha(BASE.grey[500], 0.24),
  },
});

export const DARK: PaletteOptions = merge<PaletteOptions>(BASE as PaletteOptions, {
  mode: 'dark',
  divider: THEME.BLACK.LIGHT,
  background: {
    paper: THEME.BLACK.MAIN,
    default: THEME.BLACK.DARK,
  },
  text: {
    primary: THEME.GREY[200],
    secondary: THEME.GREY[500],
    disabled: THEME.GREY[500],
  },
  action: {
    active: BASE.grey[600],
    hover: alpha(BASE.grey[500], 0.08),
    selected: alpha(BASE.primary.main, BASE.action.selectedOpacity),
    disabled: alpha(BASE.grey[500], 0.8),
    disabledBackground: alpha(BASE.grey[500], 0.24),
    focus: alpha(BASE.grey[500], 0.24),
  },
});
