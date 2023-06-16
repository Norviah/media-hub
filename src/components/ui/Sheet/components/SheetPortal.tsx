'use client';

import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/utils/cn';

import type { SheetPortalProps } from '../types/SheetPortalProps';

import * as variants from '../utils/variants';

const SheetPortal = ({
  position,
  className,
  children,
  ...props
}: SheetPortalProps): JSX.Element => (
  <SheetPrimitive.Portal className={cn(className)} {...props}>
    <div className={variants.portal({ position })}>{children}</div>
  </SheetPrimitive.Portal>
);
SheetPortal.displayName = SheetPrimitive.Portal.displayName;

export default SheetPortal;
