import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { MaterialDesignContent } from 'notistack';

import type { Theme } from '@mui/material/styles';
import type { Themes } from '@/src/types/Themes';

/**
 * The default theme to implement into the application.
 */
export const DEFAULT: Themes = 'dark';

/**
 * The main color palette used throughout the application.
 *
 * The colors specified here are referenced from the `Nord` color scheme, these
 * colors will be used as a base for the light and dark themes.
 * @see https://www.nordtheme.com
 */
export const COLORS = {
  primary: {
    main: '#81A1C1',
  },
  secondary: {
    main: '#5E81AC',
  },
  error: {
    main: '#BF616A',
  },
  warning: {
    main: '#EBCB8B',
  },
  info: {
    main: '#88C0D0',
  },
  success: {
    main: '#A3BE8C',
  },
};

/**
 * The light theme.
 */
export const LIGHT: Theme = createTheme({
  palette: { mode: 'light', divider: '#E5E9F0', ...COLORS },
});

/**
 * The dark theme.
 */
export const DARK: Theme = createTheme({
  palette: {
    mode: 'dark',
    divider: '#4C566A',
    background: { paper: '#2E3440', default: '#2E3440' },
    ...COLORS,
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

/**
 * A styled component for the `notistack` component.
 *
 * This component is responsible for styling the various `notistack` variants,
 * based on the Nord color scheme.
 * @see https://notistack.com/features/customization#override-styles
 */
export const Notistack = styled(MaterialDesignContent)((props) => ({
  '&.notistack-MuiContent-success': {
    backgroundColor: '#A3BE8C',
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: '#BF616A',
  },
  '&.notistack-MuiContent-warning': {
    backgroundColor: '#EBCB8B',
  },
  '&.notistack-MuiContent-info': {
    backgroundColor: '#81A1C1',
  },
  '&.notistack-MuiContent-default': {
    backgroundColor: '#4C566A',
  },
}));
