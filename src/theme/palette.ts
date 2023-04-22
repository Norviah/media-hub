import { alpha } from '@mui/material/styles';
import { NORD, GREY } from '@/theme/colors';
import { merge } from '@/util/merge';

import type { PaletteOptions } from '@/types/mui';

export const SOURCE = { ...NORD, grey: GREY };

export const BASE = {
  common: {
    black: '#000',
    white: '#fff',
  },
  primary: {
    main: SOURCE.blue.main,
  },
  secondary: {
    main: SOURCE.blue.dark,
  },
  info: {
    main: SOURCE.blue.light,
  },
  success: {
    main: SOURCE.green.main,
  },
  warning: {
    main: SOURCE.yellow.main,
  },
  error: {
    main: SOURCE.red.main,
  },
  grey: SOURCE.grey,
  divider: alpha(SOURCE.grey[500], 0.24),
  text: {
    disabled: SOURCE.grey[500],
  },
  action: {
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    selectedOpacity: 0.2,
  },
  source: SOURCE,
};

export const LIGHT = merge(BASE, {
  mode: 'light',
  divider: alpha(SOURCE.grey[500], 0.25),
  background: {
    default: SOURCE.grey[200],
  },
  text: {
    primary: SOURCE.grey[700],
    secondary: SOURCE.grey[600],
    disabled: SOURCE.grey[500],
  },
  action: {
    active: BASE.grey[600],
    hover: alpha(BASE.grey[500], 0.08),
    selected: alpha(BASE.primary.main, BASE.action.selectedOpacity),
    disabled: alpha(BASE.grey[500], 0.8),
    disabledBackground: alpha(BASE.grey[500], 0.24),
    focus: alpha(BASE.grey[500], 0.24),
  },
}) as PaletteOptions;

export const DARK = merge(BASE, {
  mode: 'dark',
  divider: SOURCE.BLACK.light,
  background: {
    paper: SOURCE.BLACK.main,
    default: SOURCE.BLACK.dark,
  },
  text: {
    primary: SOURCE.grey[200],
    secondary: SOURCE.grey[500],
    disabled: SOURCE.grey[500],
  },
  action: {
    active: BASE.grey[600],
    hover: alpha(BASE.grey[500], 0.08),
    selected: alpha(BASE.primary.main, BASE.action.selectedOpacity),
    disabled: alpha(BASE.grey[500], 0.8),
    disabledBackground: alpha(BASE.grey[500], 0.24),
    focus: alpha(BASE.grey[500], 0.24),
  },
}) as PaletteOptions;
