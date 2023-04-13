import type { ThemeOptions } from '@/types/mui/ThemeOptions';
import type { Components as ComponentOverrides } from '@mui/material/styles/components';

export function Card(theme: ThemeOptions): ComponentOverrides {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.customShadows.card,
          borderRadius: theme.shape?.borderRadius ? theme.shape.borderRadius * 1.5 : 1,
          position: 'relative',
          zIndex: 0, // Fix Safari overflow: hidden with border radius
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6',
        },
        subheaderTypographyProps: {
          variant: 'body2',
        },
      },
      styleOverrides: {
        root: {
          // padding: theme.spacing(3, 3, 0),
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          // padding: theme.spacing(3),
        },
      },
    },
  };
}
