import type { ThemeOptions } from '@/types/mui/ThemeOptions';
import type { Components as ComponentOverrides } from '@mui/material/styles/components';

export function Typography(theme: ThemeOptions): ComponentOverrides {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: typeof theme?.spacing === 'function' ? theme?.spacing(2) : theme?.spacing,
        },
        gutterBottom: {
          marginBottom: typeof theme?.spacing === 'function' ? theme?.spacing(1) : theme?.spacing,
        },
      },
    },
  } as ComponentOverrides;
}
