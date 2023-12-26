'use client';

import Image from 'next/image';

import { cn } from '@/utils/cn';
import { placeholderImage } from '@/utils/tmdb';
import { useState } from 'react';

import type { ImageProps } from 'next/image';

type Props = ImageProps & {
  errorText?: string;
};

export function ErrorImage({ className, errorText, ...props }: Props): JSX.Element {
  const [src, setSrc] = useState(props.src);

  return (
    <Image
      {...props}
      className={cn(className)}
      alt={props.alt}
      src={src}
      onError={() => setSrc(placeholderImage(errorText ?? props.alt))}
    />
  );
}
