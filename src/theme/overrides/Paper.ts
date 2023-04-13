import type { Components as ComponentOverrides } from '@mui/material/styles/components';

export function Paper(): ComponentOverrides {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  };
}
