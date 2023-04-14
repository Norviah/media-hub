import type { TypographyStyleOptions } from '@mui/material/styles/createTypography';

/**
 * Converts a pixel value to rem.
 *
 * @param value The pixel value to convert.
 * @returns The rem value.
 */
export function pxToRem(value: number): string {
  return `${value / 16}rem`;
}

/**
 * Generates a font size property for various breakpoints within the
 * application.
 *
 * @param args Information regarding the font size.
 * @returns The CSS properties generated from the given arguments.
 */
export function responsiveFontSizes(args: {
  sm: number;
  md: number;
  lg: number;
}): TypographyStyleOptions {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(args.sm),
    },

    '@media (min-width:900px)': {
      fontSize: pxToRem(args.md),
    },

    '@media (min-width:1200px)': {
      fontSize: pxToRem(args.lg),
    },
  };
}
