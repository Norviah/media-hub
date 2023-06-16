import * as React from 'react';

import { cn } from '@/utils/cn';
import type { InputProps } from '../types/InputProps';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <>
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        {props.helpertext || props.error ? (
          <p
            className={cn(
              'px-1 text-xs',
              props.error ? 'text-destructive' : 'text-muted-foreground'
            )}
          >
            {props.helpertext || props.error}
          </p>
        ) : undefined}
      </>
    );
  }
);
Input.displayName = 'Input';

export default Input;
