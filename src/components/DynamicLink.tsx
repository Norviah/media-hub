import Link from 'next/link';

import { cn } from '@/lib/utils';

import type { Route } from 'next';
import type { LinkProps } from 'next/link';

export type DynamicLinkProps<Path extends string = string> = Omit<
  LinkProps<Route<Path>>,
  'href'
> & {
  href: Route<Path> | string | undefined;
};

/**
 * A versatile link component for internal and external navigation.
 *
 * Depending on the target URL, this component will use Next.js' `Link`
 * component when rendering a link for internal navigation, or a standard
 * anchor tag for external links.
 *
 * Not really sure if this matters but ¯\_(ツ)_/¯
 *
 * This component is mainly used to have links in the middle of text that
 * can be either internal or external links.
 *
 * @example
 * @template Path The target path for internal navigation.
 *
 * ```tsx
 * Eiusmod officia ex veniam cillum magna commodo esse ex
 * <DynamicLink href="/about">excepteur</DynamicLink> do cupidatat aute.
 * ```
 */
export function DynamicLink<Path extends string = string>({
  className: newClassName,
  href,
  ...props
}: DynamicLinkProps): JSX.Element {
  const className = cn('text-foreground-dark underline underline-offset-4', newClassName);

  if (href?.startsWith('/')) {
    return <Link href={href as Route<Path>} className={className} {...props} />;
  }

  return <a href={href} className={className} {...props} />;
}
