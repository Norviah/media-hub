import { alpha } from '@mui/material/styles';
import type { CSSObject } from '@emotion/styled';

/**
 * Creates a blur effect for the background from the given color.
 *
 * @param args Represents information about the blur effect.
 * @returns The CSS properties generated from the given arguments.
 */
export function bgBlur(args: { color: string; blur?: number; opacity?: number }): CSSObject {
  const blur = args?.blur || 10;

  return {
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    backgroundColor: alpha(args.color, args.opacity ?? 0.8),
  };
}

/**
 * Creates a linear gradient property for the background.
 *
 * @param args Represents information about the gradient.
 * @returns The CSS properties generated from the given arguments.
 */
export function bgGradient(args: { direction?: string; start: string; end: string }): CSSObject {
  return {
    background: `linear-gradient(${args?.direction ?? 'to bottom'}, ${args.start}, ${args.end})`,
  };
}
