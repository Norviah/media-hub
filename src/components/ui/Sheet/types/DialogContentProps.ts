import type SheetPrimitive from '@radix-ui/react-dialog';
import type { VariantProps } from 'class-variance-authority';

import type * as variants from '../utils/variants';

export interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof variants.sheet> {}
