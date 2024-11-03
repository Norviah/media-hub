import Image from 'next/image';
import Link from 'next/link';

import { Fragment } from 'react';
import { Card } from './ui/Card';
import { Skeleton } from './ui/Skeleton';

import { cn } from '@/lib/utils';

import type { SkeletalProps } from '@/types';
import type { Route } from 'next';
import type { ImageProps } from 'next/image';

const baseClasses = {
  container: 'flex w-1/2 flex-row rounded bg-card',
  imageContainer: 'w-fit',
  image: 'h-full w-full rounded',
  content: 'flex flex-1 flex-col text-xs',
};

type ImageCardProps<Path extends string = string> = SkeletalProps<
  {
    /**
     * The route to navigate to when the image is clicked.
     */
    href?: Route<Path>;

    /**
     * CSS classes for different parts of the `ImageCard` component.
     */
    classes?: Partial<typeof baseClasses>;

    /**
     * The child elements to be rendered alongside the image.
     *
     * Typically information about the image, such as the title, description, or
     * other metadata.
     */
    children: React.ReactNode;
  } & Omit<ImageProps, 'height' | 'width' | 'className' | 'children'>,
  'children' | 'classes'
>;

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
export function ImageCard<Path extends string = string>(props: ImageCardProps<Path>): JSX.Element {
  if (props.skeleton) {
    return (
      <div className={cn(baseClasses.container, props.classes?.container)}>
        <div className={cn(baseClasses.imageContainer, props.classes?.imageContainer)}>
          <Skeleton className={cn(baseClasses.image, props.classes?.image)} />
        </div>

        <div className={cn(baseClasses.content, props.classes?.content)}>{props.children}</div>
      </div>
    );
  }

  const { classes, children, href, ...imageProps } = props;

  const ParentComponent = href ? Link : Fragment;

  return (
    <Card className={cn(baseClasses.container, classes?.container)}>
      <div className={cn(baseClasses.imageContainer, classes?.imageContainer)}>
        {/* @ts-ignore */}
        <ParentComponent {...(href ? { href } : {})}>
          <Image
            width='0'
            height='0'
            className={cn(baseClasses.image, classes?.image)}
            {...imageProps}
          />
        </ParentComponent>
      </div>

      <div className={cn(baseClasses.content, classes?.content)}>{children}</div>
    </Card>
  );
}
