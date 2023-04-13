import { alpha } from '@mui/material/styles';
import type { Components as ComponentOverrides } from '@mui/material/styles/components';

import * as palettes from '@/theme/palette';

export const DARK: ComponentOverrides = {
  MuiInputBase: {
    styleOverrides: {
      root: {
        '&.Mui-disabled': {
          '& svg': {
            color: palettes.DARK.text?.disabled,
          },
        },
      },
      input: {
        '&::placeholder': {
          opacity: 1,
          color: palettes.DARK.text?.disabled,
        },
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      underline: {
        '&:before': {
          borderBottomColor: alpha(palettes.THEME.GREY[500], 0.56),
        },
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        backgroundColor: alpha(palettes.THEME.GREY[500], 0.12),
        '&:hover': {
          backgroundColor: alpha(palettes.THEME.GREY[500], 0.16),
        },
        '&.Mui-focused': {
          backgroundColor: palettes.DARK.action?.focus,
        },
        '&.Mui-disabled': {
          backgroundColor: palettes.DARK.action?.disabledBackground,
        },
      },
      underline: {
        '&:before': {
          borderBottomColor: alpha(palettes.THEME.GREY[500], 0.56),
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: alpha(palettes.THEME.GREY[500], 0.32),
        },
        '&.Mui-disabled': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: palettes.DARK.action?.disabledBackground,
          },
        },
      },
    },
  },
};

export const LIGHT: ComponentOverrides = {
  MuiInputBase: {
    styleOverrides: {
      root: {
        '&.Mui-disabled': {
          '& svg': {
            color: palettes.LIGHT.text?.disabled,
          },
        },
      },
      input: {
        '&::placeholder': {
          opacity: 1,
          color: palettes.LIGHT.text?.disabled,
        },
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      underline: {
        '&:before': {
          borderBottomColor: alpha(palettes.THEME.GREY[500], 0.56),
        },
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        backgroundColor: alpha(palettes.THEME.GREY[500], 0.12),
        '&:hover': {
          backgroundColor: alpha(palettes.THEME.GREY[500], 0.16),
        },
        '&.Mui-focused': {
          backgroundColor: palettes.LIGHT.action?.focus,
        },
        '&.Mui-disabled': {
          backgroundColor: palettes.LIGHT.action?.disabledBackground,
        },
      },
      underline: {
        '&:before': {
          borderBottomColor: alpha(palettes.THEME.GREY[500], 0.56),
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: alpha(palettes.THEME.GREY[500], 0.32),
        },
        '&.Mui-disabled': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: palettes.LIGHT.action?.disabledBackground,
          },
        },
      },
    },
  },
};
