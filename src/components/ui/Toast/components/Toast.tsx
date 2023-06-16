import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';

import { cn } from '@/utils/cn';
import { variants } from '../utils/variants';

import type { VariantProps } from 'class-variance-authority';

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof variants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root ref={ref} className={cn(variants({ variant }), className)} {...props} />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

export default Toast;
