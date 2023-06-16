'use client';

import * as React from 'react';
import * as MenuBarPrimitive from '@radix-ui/react-menubar';

import { cn } from '@/utils/cn';

const MenuBarItem = React.forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenuBarPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
MenuBarItem.displayName = MenuBarPrimitive.Item.displayName;

export default MenuBarItem;
