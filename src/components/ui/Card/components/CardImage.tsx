import * as React from 'react';
import { cn } from '@/utils/cn';

const CardImage = React.forwardRef<HTMLImageElement, React.HTMLAttributes<HTMLImageElement>>(
  ({ className, ...props }, ref) => (
    <img ref={ref} className={cn('h-60 w-full object-cover', className)} {...props} />
  )
);
CardImage.displayName = 'CardImage';

export default CardImage;
