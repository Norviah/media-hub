import Link from 'next/link';

import { cn } from '@/lib/utils';

import type { UrlObject } from 'node:url';
import type { LinkProps } from 'next/link';
import type { ClassNameValue } from 'tailwind-merge';

type Routes = Exclude<LinkProps<unknown>['href'], UrlObject>;

export function DynamicLink({
  className,
  href,
  ...props
}: Omit<LinkProps<unknown>, 'href'> & {
  href: Routes | string | undefined;
  className?: ClassNameValue;
}): JSX.Element {
  const defaultClass: ClassNameValue = 'text-foreground underline underline-offset-4';

  if (href?.startsWith('/')) {
    return <Link href={href as Routes} className={cn(defaultClass, className)} {...props} />;
  }

  return <a href={href} className={cn(defaultClass, className)} {...props} />;
}
