import React from 'react';
import Image from 'next/image';

import { cn } from '@/utils/cn';

import type { ImageProps } from 'next/image';

const CardNextImage = React.forwardRef<typeof Image, ImageProps>(({ className, ...props }, ref) => (
  <Image className={cn('h-60 w-full object-cover', className)} {...props} />
));
CardNextImage.displayName = 'CardImage';

export default CardNextImage;
