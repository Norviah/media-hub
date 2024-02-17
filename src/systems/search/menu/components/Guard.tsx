'use client';

import { usePathname } from 'next/navigation';
import { useParsedQuery } from '../../common/hooks';

import type { Route } from 'next';
import type { RequireAtLeastOne } from 'type-fest';
import type { ParsedParams } from '../../common/utils';

type GuardConditions = {
  /**
   * The pathname to guard against.
   *
   * If the current pathname matches this specified pathname, the children will
   * not be rendered.
   */
  pathname?: Route;

  /**
   * Any query parameters to guard against.
   *
   * If any of the specified query parameters are present, the children will not
   * be rendered.
   */
  queries?: (keyof ParsedParams)[];
};

export type GuardProps = { children: JSX.Element[] | JSX.Element } & RequireAtLeastOne<GuardConditions>;

/**
 * A component that conditionally renders its children based on conditions.
 *
 * This component acts as a guard for its children, controlling whether if they
 * are rendered based on conditions specified within properties. If the
 * conditions are met, the children will not be rendered.
 *
 * @returns The children to render.
 * @example
 *
 * ```tsx
 * <RenderGuard pathname="/search">
 *   <div>Rendered if the current pathname is not "/search".</div>
 * </RenderGuard>
 * ```
 */
export function Guard({ children, pathname, queries }: GuardProps): JSX.Element[] | JSX.Element | null {
  const currentPathname = usePathname();
  const currentQueries = useParsedQuery();

  if (pathname && pathname === currentPathname) {
    return null;
  } else if (queries) {
    for (const query of queries) {
      if (currentQueries[query] !== undefined) {
        return null;
      }
    }
  }

  return children;
}
