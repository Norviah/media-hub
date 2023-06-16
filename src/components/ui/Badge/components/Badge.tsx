import { cn } from '@/utils/cn';
import { variants } from '../utils/variants';

import type { BadgeProps } from '../types/BadgeProps';

export default function Badge({ className, variant, ...props }: BadgeProps): JSX.Element {
  return <div className={cn(variants({ variant }), className)} {...props} />;
}
