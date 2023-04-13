import { alpha, darken } from '@mui/material/styles';

import type { Shadows } from '@mui/material/styles';

import * as palettes from '@/theme/palette';

const colors = {
  LIGHT: palettes.THEME.GREY[900],
  DARK: '#000',
};

const transparents = {
  LIGHT: alpha(colors.LIGHT, 0.16),
  DARK: alpha(colors.DARK, 0.16),
};

const transparent1: string = alpha(colors.LIGHT, 0.2);
const transparent2: string = alpha(colors.LIGHT, 0.14);
const transparent3: string = alpha(colors.LIGHT, 0.12);

const transparent4: string = alpha(colors.DARK, 0.2);
const transparent5: string = alpha(colors.DARK, 0.14);
const transparent6: string = alpha(colors.DARK, 0.12);

const BASE: Shadows = [
  'none',
  `0px 2px 1px -1px transparent1,0px 1px 1px 0px transparent2,0px 1px 3px 0px transparent3`,
  `0px 3px 1px -2px transparent1,0px 2px 2px 0px transparent2,0px 1px 5px 0px transparent3`,
  `0px 3px 3px -2px transparent1,0px 3px 4px 0px transparent2,0px 1px 8px 0px transparent3`,
  `0px 2px 4px -1px transparent1,0px 4px 5px 0px transparent2,0px 1px 10px 0px transparent3`,
  `0px 3px 5px -1px transparent1,0px 5px 8px 0px transparent2,0px 1px 14px 0px transparent3`,
  `0px 3px 5px -1px transparent1,0px 6px 10px 0px transparent2,0px 1px 18px 0px transparent3`,
  `0px 4px 5px -2px transparent1,0px 7px 10px 1px transparent2,0px 2px 16px 1px transparent3`,
  `0px 5px 5px -3px transparent1,0px 8px 10px 1px transparent2,0px 3px 14px 2px transparent3`,
  `0px 5px 6px -3px transparent1,0px 9px 12px 1px transparent2,0px 3px 16px 2px transparent3`,
  `0px 6px 6px -3px transparent1,0px 10px 14px 1px transparent2,0px 4px 18px 3px transparent3`,
  `0px 6px 7px -4px transparent1,0px 11px 15px 1px transparent2,0px 4px 20px 3px transparent3`,
  `0px 7px 8px -4px transparent1,0px 12px 17px 2px transparent2,0px 5px 22px 4px transparent3`,
  `0px 7px 8px -4px transparent1,0px 13px 19px 2px transparent2,0px 5px 24px 4px transparent3`,
  `0px 7px 9px -4px transparent1,0px 14px 21px 2px transparent2,0px 5px 26px 4px transparent3`,
  `0px 8px 9px -5px transparent1,0px 15px 22px 2px transparent2,0px 6px 28px 5px transparent3`,
  `0px 8px 10px -5px transparent1,0px 16px 24px 2px transparent2,0px 6px 30px 5px transparent3`,
  `0px 8px 11px -5px transparent1,0px 17px 26px 2px transparent2,0px 6px 32px 5px transparent3`,
  `0px 9px 11px -5px transparent1,0px 18px 28px 2px transparent2,0px 7px 34px 6px transparent3`,
  `0px 9px 12px -6px transparent1,0px 19px 29px 2px transparent2,0px 7px 36px 6px transparent3`,
  `0px 10px 13px -6px transparent1,0px 20px 31px 3px transparent2,0px 8px 38px 7px transparent3`,
  `0px 10px 13px -6px transparent1,0px 21px 33px 3px transparent2,0px 8px 40px 7px transparent3`,
  `0px 10px 14px -6px transparent1,0px 22px 35px 3px transparent2,0px 8px 42px 7px transparent3`,
  `0px 11px 14px -7px transparent1,0px 23px 36px 3px transparent2,0px 9px 44px 8px transparent3`,
  `0px 11px 15px -7px transparent1,0px 24px 38px 3px transparent2,0px 9px 46px 8px transparent3`,
];

export const arrays = {
  LIGHT: BASE.map(
    (item) =>
      item
        .replace(/transparent1/g, transparent1)
        .replace(/transparent2/g, transparent2)
        .replace(/transparent3/g, transparent3) as unknown as Shadows
  ) as Shadows[],

  DARK: BASE.map(
    (item) =>
      item
        .replace(/transparent1/g, transparent4)
        .replace(/transparent2/g, transparent5)
        .replace(/transparent3/g, transparent6) as unknown as Shadows
  ) as Shadows[],
};

export const LIGHT = {
  z1: `0 1px 2px 0 ${transparents.LIGHT}`,
  z4: `0 4px 8px 0 ${transparents.LIGHT}`,
  z8: `0 8px 16px 0 ${transparents.LIGHT}`,
  z12: `0 12px 24px -4px ${transparents.LIGHT}`,
  z16: `0 16px 32px -4px ${transparents.LIGHT}`,
  z20: `0 20px 40px -4px ${transparents.LIGHT}`,
  z24: `0 24px 48px 0 ${transparents.LIGHT}`,
  dialog: `-40px 40px 80px -8px ${alpha(colors.LIGHT, 0.24)}`,
  dropdown: `0 0 2px 0 ${alpha(colors.LIGHT, 0.24)}, -20px 20px 40px -4px ${alpha(
    colors.LIGHT,
    0.24
  )}`,
  primary: `0 8px 16px 0 ${alpha(palettes.LIGHT.primary.main, 0.5)}`,
  info: `0 8px 16px 0 ${alpha(palettes.LIGHT.info.main, 0.5)}`,
  secondary: `0 8px 16px 0 ${alpha(palettes.LIGHT.secondary.main, 0.5)}`,
  success: `0 8px 16px 0 ${alpha(palettes.LIGHT.success.main, 0.5)}`,
  warning: `0 8px 16px 0 ${alpha(palettes.LIGHT.warning.main, 0.5)}`,
  error: `0 8px 16px 0 ${alpha(palettes.LIGHT.error.main, 0.5)}`,
  card: `0 0 2px 0 ${alpha(colors.LIGHT, 0.2)}, 0 12px 24px -4px ${alpha(colors.LIGHT, 0.12)}`,
};

export const DARK = {
  z1: `0 1px 2px 0 ${transparents.DARK}`,
  z4: `0 4px 8px 0 ${transparents.DARK}`,
  z8: `0 8px 16px 0 ${transparents.DARK}`,
  z12: `0 12px 24px -4px ${transparents.DARK}`,
  z16: `0 16px 32px -4px ${transparents.DARK}`,
  z20: `0 20px 40px -4px ${transparents.DARK}`,
  z24: `0 24px 48px 0 ${transparents.DARK}`,
  dialog: `-40px 40px 80px -8px ${alpha(colors.DARK, 0.24)}`,
  dropdown: `0 0 2px 0 ${alpha(colors.DARK, 0.24)}, -20px 20px 40px -4px ${alpha(
    colors.DARK,
    0.24
  )}`,
  // primary: `0 8px 16px 0 ${alpha(palettes.DARK.primary.main, 0.24)}`,
  // info: `0 8px 16px 0 ${alpha(palettes.DARK.info.main, 0.24)}`,
  // secondary: `0 8px 16px 0 ${alpha(palettes.DARK.secondary.main, 0.24)}`,
  // success: `0 8px 16px 0 ${alpha(palettes.DARK.success.main, 0.24)}`,
  // warning: `0 8px 16px 0 ${alpha(palettes.DARK.warning.main, 0.24)}`,
  primary: `0 8px 16px 0 ${darken(palettes.DARK.primary.main, 0.5)}`,
  info: `0 8px 16px 0 ${darken(palettes.DARK.info.main, 0.6)}`,
  secondary: `0 8px 16px 0 ${darken(palettes.DARK.secondary.main, 0.5)}`,
  success: `0 8px 16px 0 ${darken(palettes.DARK.success.main, 0.6)}`,
  error: `0 8px 16px 0 ${darken(palettes.DARK.error.main, 0.6)}`,
  warning: `0 8px 16px 0 ${darken(palettes.DARK.warning.main, 0.65)}`,
  card: `rgba(0, 0, 0, 0.2) 0px 0px 20px 0px, rgba(0, 0, 0, 0.12) 0px 12px 24px -4px`,
};
