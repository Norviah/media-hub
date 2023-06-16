'use client';

import * as React from 'react';
import * as MenuBarPrimitive from '@radix-ui/react-menubar';

import { cn } from '@/utils/cn';

const MenuBarTrigger = React.forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenuBarPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      className
    )}
    {...props}
  />
));
MenuBarTrigger.displayName = MenuBarPrimitive.Trigger.displayName;

export default MenuBarTrigger;
