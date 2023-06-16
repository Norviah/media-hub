'use client';

import * as React from 'react';
import * as MenuBarPrimitive from '@radix-ui/react-menubar';

import { cn } from '@/utils/cn';
import { ChevronRightIcon } from 'lucide-react';

const MenuBarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenuBarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenuBarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenuBarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto h-4 w-4" />
  </MenuBarPrimitive.SubTrigger>
));
MenuBarSubTrigger.displayName = MenuBarPrimitive.SubTrigger.displayName;

export default MenuBarSubTrigger;
