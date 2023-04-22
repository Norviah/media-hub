import Box from '@mui/material/Box';

import { alpha, styled } from '@mui/material/styles';

import type { LabelProps } from '@/types/components/label';
import type { Theme } from '@mui/material/styles';

export const LayoutContainer = styled(Box)((props: LabelProps & { theme: Theme }) => {
  const { theme, variant } = props;
  const { palette } = theme;

  const color: LabelProps['color'] = props.color ?? 'default';

  const defaultStyle = {
    ...(color === 'default' && {
      // OUTLINED
      ...(variant === 'outlined' && {
        backgroundColor: 'transparent',
        color: palette.text.primary,
        border: `1px solid ${alpha(palette.grey[500], 0.32)}`,
      }),

      // SOFT
      ...(variant === 'soft' && {
        color: palette.mode === 'light' ? palette.text.primary : palette.common.white,
        backgroundColor: alpha(palette.grey[500], 0.16),
      }),
    }),
  };

  const colorStyle = {
    ...(color !== 'default' && {
      // FILLED
      ...(variant === 'filled' && {
        color: palette[color].contrastText,
        backgroundColor: palette[color].main,
      }),

      // OUTLINED
      ...(variant === 'outlined' && {
        backgroundColor: 'transparent',
        color: palette[color].main,
        border: `1px solid ${palette[color].main}`,
      }),

      // SOFT
      ...(variant === 'soft' && {
        color: palette[color][palette.mode === 'light' ? 'dark' : 'light'],
        backgroundColor: alpha(palette[color].main, 0.16),
      }),
    }),
  };

  return {
    height: 24,
    minWidth: 22,
    position: 'absolute',
    lineHeight: 0,
    borderRadius: 6,
    cursor: 'default',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    justifyContent: 'center',
    textTransform: 'capitalize',
    padding: theme.spacing(0, 1),
    color: palette.grey[800],
    fontSize: theme.typography.pxToRem(12),
    fontFamily: theme.typography.fontFamily,
    backgroundColor: palette.grey[300],
    fontWeight: theme.typography.fontWeightBold,
    ...props.spacing,
    ...colorStyle,
    ...defaultStyle,
  };
});

export default LayoutContainer;
