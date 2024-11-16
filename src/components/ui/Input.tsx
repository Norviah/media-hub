import { cn } from '@/lib/utils';

import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'peer/input group box-border block w-full rounded-md border border-border bg-card px-3 py-2 text-card-foreground text-sm leading-4 placeholder-card-foreground-light shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:border-foreground-muted focus-visible:shadow-md focus-visible:ring-background-control',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
