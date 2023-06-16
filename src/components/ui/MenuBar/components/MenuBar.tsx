'use client';

import * as React from 'react';
import * as MenuBarPrimitive from '@radix-ui/react-menubar';

import { cn } from '@/utils/cn';

const MenuBar = React.forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenuBarPrimitive.Root
    ref={ref}
    className={cn(
      'flex h-10 items-center space-x-1 rounded-md border bg-background p-1',
      className
    )}
    {...props}
  />
));
MenuBar.displayName = MenuBarPrimitive.Root.displayName;

export default MenuBar;
