import { useEffect, useState } from 'react';

/**
 * The breakpoint at which the device is considered a mobile device.
 */
const MOBILE_BREAKPOINT = 768;

/**
 * Determines whether if the user is on a mobile device.
 *
 * @returns Whether if the user is using the application on a mobile device.
 * @example
 *
 * ```tsx
 * "use client";
 *
 * import { useIsMobile } from "@/hooks";
 *
 * export default function Page(): JSX.Element {
 *   const isMobile = useIsMobile();
 *
 *   return (
 *     /* Render conditionally based on the device type *\/
 *   )
 * }
 * ```
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    mql.addEventListener('change', onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    return () => {
      mql.removeEventListener('change', onChange);
    };
  }, []);

  return !!isMobile;
}
