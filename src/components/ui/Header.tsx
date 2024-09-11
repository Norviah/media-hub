import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

import type { VariantProps } from 'class-variance-authority';

export const headerVariants = cva('scroll-m-20', {
  variants: {
    type: {
      h1: 'text-4xl font-extrabold lg:text-5xl',
      h2: 'text-3xl font-semibold first:mt-0',
      h3: 'text-2xl font-semibold',
      h4: 'text-xl font-semibold',
      h5: 'text-lg font-semibold',
      h6: 'text-base font-semibold',
    },
  },
});

type Headers = NonNullable<VariantProps<typeof headerVariants>['type']>;
type BaseHeaderProps = JSX.IntrinsicElements[Headers];

export interface HeaderProps extends BaseHeaderProps, VariantProps<typeof headerVariants> {
  type: Headers;
}

export function Header({
  className,
  id,
  children,
  type: Component,
  ...props
}: HeaderProps): JSX.Element {
  return (
    <Component
      className={cn(headerVariants({ type: Component }), className)}
      id={id || typeof children === 'string' ? (children as string) : undefined}
      {...props}
    >
      {children}
    </Component>
  );
}
