'use client';

import * as React from 'react';
import * as MenuBarPrimitive from '@radix-ui/react-menubar';

import { cn } from '@/utils/cn';

const MenuBarSeparator = React.forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenuBarPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
MenuBarSeparator.displayName = MenuBarPrimitive.Separator.displayName;

export default MenuBarSeparator;
