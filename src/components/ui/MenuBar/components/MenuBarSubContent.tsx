'use client';

import * as React from 'react';
import * as MenuBarPrimitive from '@radix-ui/react-menubar';

import { cn } from '@/utils/cn';

const MenuBarSubContent = React.forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenuBarPrimitive.SubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-card-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1',
      className
    )}
    {...props}
  />
));
MenuBarSubContent.displayName = MenuBarPrimitive.SubContent.displayName;

export default MenuBarSubContent;
