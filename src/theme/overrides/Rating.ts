import type { Components as ComponentOverrides } from '@mui/material/styles/components';

export function Rating(): ComponentOverrides {
  return {
    MuiRating: {
      defaultProps: {
        precision: 0.5,
      },
    },
  };
}
