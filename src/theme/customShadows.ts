import { alpha } from '@mui/material/styles';
import { GREY } from '@/theme/colors';

import * as palettes from '@/theme/palette';

const color = GREY[500];
const transparent = alpha(color, 0.16);

const BASE = {
  z1: `0 1px 2px 0 ${transparent}`,
  z4: `0 4px 8px 0 ${transparent}`,
  z8: `0 8px 16px 0 ${transparent}`,
  z12: `0 12px 24px -4px ${transparent}`,
  z16: `0 16px 32px -4px ${transparent}`,
  z20: `0 20px 40px -4px ${transparent}`,
  z24: `0 24px 48px 0 ${transparent}`,
  dialog: `-40px 40px 80px -8px ${alpha(color, 0.24)}`,
  dropdown: `0 0 2px 0 ${alpha(color, 0.24)}, -20px 20px 40px -4px ${alpha(color, 0.24)}`,
};

export const LIGHT = {
  ...BASE,
  primary: `0 8px 16px 0 ${alpha(palettes.LIGHT.primary.main, 0.24)}`,
  info: `0 8px 16px 0 ${alpha(palettes.LIGHT.info.main, 0.24)}`,
  secondary: `0 8px 16px 0 ${alpha(palettes.LIGHT.secondary.main, 0.24)}`,
  success: `0 8px 16px 0 ${alpha(palettes.LIGHT.success.main, 0.24)}`,
  warning: `0 8px 16px 0 ${alpha(palettes.LIGHT.warning.main, 0.24)}`,
  error: `0 8px 16px 0 ${alpha(palettes.LIGHT.error.main, 0.24)}`,
  card: `0 0 2px 0 ${alpha(color, 0.2)}, 0 12px 24px -4px ${alpha(color, 0.12)}`,
};

export const DARK = {
  ...BASE,
  primary: `0 8px 16px 0 ${alpha(palettes.DARK.primary.main, 0.24)}`,
  info: `0 8px 16px 0 ${alpha(palettes.DARK.info.main, 0.24)}`,
  secondary: `0 8px 16px 0 ${alpha(palettes.DARK.secondary.main, 0.24)}`,
  success: `0 8px 16px 0 ${alpha(palettes.DARK.success.main, 0.24)}`,
  warning: `0 8px 16px 0 ${alpha(palettes.DARK.warning.main, 0.24)}`,
  card: `rgba(0, 0, 0, 0.2) 0px 0px 20px 0px, rgba(0, 0, 0, 0.12) 0px 12px 24px -4px`,
};
