import type { VariantProps } from 'class-variance-authority';
import type { variants } from '../utils/variants';

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {}
