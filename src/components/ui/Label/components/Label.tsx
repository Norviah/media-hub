'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from '@/utils/cn';
import { labels } from '../utils/variants';

import type { VariantProps } from 'class-variance-authority';

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labels>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labels(), className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
