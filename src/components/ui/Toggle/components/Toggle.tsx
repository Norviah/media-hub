'use client';

import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';

import { variants } from '../utils/variants';
import { cn } from '@/utils/cn';

import type { VariantProps } from 'class-variance-authority';

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof variants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(variants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export default Toggle;
