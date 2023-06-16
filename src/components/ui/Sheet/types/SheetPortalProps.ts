import type SheetPrimitive from '@radix-ui/react-dialog';
import type { VariantProps } from 'class-variance-authority';

import type * as variants from '../utils/variants';

export interface SheetPortalProps
  extends SheetPrimitive.DialogPortalProps,
    VariantProps<typeof variants.portal> {}
