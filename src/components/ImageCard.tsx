import Image from 'next/image';
import { cn } from '@/lib/utils';

import type { ImageProps } from 'next/image';

export type ImageCardProps = {
  /**
   * CSS classes for different parts of the `ImageCard` component.
   */
  classes?: { container?: string; content?: string; imageContainer?: string; image?: string };

  /**
   * The child elements to be rendered alongside the image.
   *
   * Typically information about the image, such as the title, description, or
   * other metadata.
   */
  children: JSX.Element | JSX.Element[];
} & Omit<ImageProps, 'height' | 'width' | 'className'>;

/**
 * A flexible image card component.
 *
 * This component provides the structure to render an image alongside other
 * relevant content, allowing you to customize how the image and content are
 * styled.
 *
 * @example
 *
 * ```tsx
 * <ImageCard
 *   classes={{
 *     container: 'w-full',
 *     content: 'space-y-3 p-5',
 *     image: 'h-[243.5px] w-[162.3px] rounded-none rounded-l',
 *   }}
 *   src='https://image.tmdb.org/t/p/original/vR7hwaGQ0ySRoq1WobiNRaPs4WO.jpg'
 *   alt='Mob Psycho 100'
 * >
 *   <div className='space-y-1'>
 *     <p className='text-base'>Mob Psycho</p>
 *     <p className='text-foreground-lighter'>TV Show • 23 episodes</p>
 *   </div>
 *
 *   <p className='text-foreground-light'>
 *     Shigeo Kageyama, a.k.a. "Mob," is a boy who has trouble expressing himself, but who
 *     happens to be a powerful esper. Mob is determined to live a normal life and keeps his ESP
 *     suppressed, but when his emotions surge to a level of 100%, something terrible happens to
 *     him! As he's surrounded by false espers, evil spirits, and mysterious organizations, what
 *     will Mob think? What choices will he make?
 *   </p>
 * </ImageCard>
 * ```
 **/
export function ImageCard({ classes, children, ...imageProps }: ImageCardProps): JSX.Element {
  return (
    <div className={cn('flex w-1/2 flex-row rounded bg-card', classes?.container)}>
      <div className={cn('w-fit', classes?.imageContainer)}>
        <Image
          width='0'
          height='0'
          className={cn('h-full w-full rounded', classes?.image)}
          {...imageProps}
        />
      </div>

      <div className={cn('flex flex-1 flex-col text-xs', classes?.content)}>{children}</div>
    </div>
  );
}
