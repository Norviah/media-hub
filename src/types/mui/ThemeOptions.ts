import type { PaletteOptions as BasePaletteOptions } from '@mui/material/styles/createPalette';
import type { Color, ThemeOptions as BaseThemeOptions } from '@mui/material';
import type { SimplePaletteColorOptions } from '@mui/material/styles/createPalette';

export interface PaletteOptions extends BasePaletteOptions {
  primary: SimplePaletteColorOptions;
  secondary: SimplePaletteColorOptions;
  info: SimplePaletteColorOptions;
  success: SimplePaletteColorOptions;
  warning: SimplePaletteColorOptions;
  error: SimplePaletteColorOptions;
  grey: Color;
  mode: 'light' | 'dark';
  source: Record<string, SimplePaletteColorOptions | Color>;
}

export type ThemeOptions = BaseThemeOptions & {
  palette: PaletteOptions;
};
