import * as React from 'react';

import { cn } from '@/utils/cn';
import { variants } from '../utils/variants';

import type { VariantProps } from 'class-variance-authority';

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof variants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(variants({ variant }), className)} {...props} />
));
Alert.displayName = 'Alert';

export default Alert;
