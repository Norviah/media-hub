import * as React from 'react';

import { cn } from '@/utils/cn';
import { Slot } from '@radix-ui/react-slot';
import { variants } from '../utils/variants';

import { SpinnerIcon } from '@/components/ui/Icons';

import type { ButtonProps } from '../types/ButtonProps';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          variants({
            variant,
            size: size === undefined && variant === 'link' ? 'none' : size,
            className,
          }),
          (props.disabled || props.loading) && 'shadow-none hover:shadow-none'
        )}
        ref={ref}
        {...props}
        disabled={props.loading || props.disabled}
      >
        {props.loading && (
          <SpinnerIcon
            className={cn(
              'h-4 w-4 animate-spin',
              variant === 'ghost' || variant === 'outline' ? 'text-foreground' : 'text-background'
            )}
          />
        )}
        {props.loading ? undefined : props.children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export default Button;
