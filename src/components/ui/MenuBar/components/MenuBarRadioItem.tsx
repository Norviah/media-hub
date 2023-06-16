'use client';

import * as React from 'react';
import * as MenuBarPrimitive from '@radix-ui/react-menubar';

import { cn } from '@/utils/cn';
import { CircleIcon } from 'lucide-react';

const MenuBarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenuBarPrimitive.RadioItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenuBarPrimitive.ItemIndicator>
        <CircleIcon className="h-2 w-2 fill-current" />
      </MenuBarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenuBarPrimitive.RadioItem>
));
MenuBarRadioItem.displayName = MenuBarPrimitive.RadioItem.displayName;

export default MenuBarRadioItem;
