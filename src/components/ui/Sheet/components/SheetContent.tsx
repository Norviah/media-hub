'use client';

import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';

import SheetOverlay from './SheetOverlay';
import SheetPortal from './SheetPortal';

import { cn } from '@/utils/cn';
import { X } from 'lucide-react';

import type { DialogContentProps } from '../types/DialogContentProps';

import * as variants from '../utils/variants';

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  DialogContentProps
>(({ position, size, className, children, ...props }, ref) => (
  <SheetPortal position={position}>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(variants.sheet({ position, size }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

export default SheetContent;
