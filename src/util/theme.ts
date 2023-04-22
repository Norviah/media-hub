import { DEFAULT } from '@/theme/themes';
import type { Themes } from '@/types/theme';

/**
 * Gets the set color scheme from the user's system.
 *
 * `window.matchMedia` is implemented to check their system's color scheme
 * preference.
 * @returns The set color scheme from the user's system.
 */
export function systemColorScheme(): Themes {
  return (
    (window?.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark') ?? DEFAULT
  );
}
