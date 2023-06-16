'use client';

import * as React from 'react';
import * as MenuBarPrimitive from '@radix-ui/react-menubar';

import { cn } from '@/utils/cn';

const MenuBarContent = React.forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.Content>
>(({ className, align = 'start', alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenuBarPrimitive.Portal>
    <MenuBarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[12rem] overflow-hidden rounded-md border bg-card p-1 text-card-foreground shadow-md animate-in slide-in-from-top-1',
        className
      )}
      {...props}
    />
  </MenuBarPrimitive.Portal>
));
MenuBarContent.displayName = MenuBarPrimitive.Content.displayName;

export default MenuBarContent;
