'use client';

import NextImage from 'next/image';

import { Caption } from '@/components';
import { Skeleton } from '@/components/ui';

import { cn } from '@/lib/utils';
import {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
} from 'react';
import { DefaultImageGroup, type ImageCoordinatorGroup } from './lib/context';

import type { ImageProps as NextImageProps } from 'next/image';

type LoadingState = 'loading' | 'loaded' | 'revealed' | 'error';

type ImageState = {
  state: LoadingState;
  src: string;
};

type Action =
  | { type: 'update'; src: string }
  | { type: 'loaded' }
  | { type: 'revealed' }
  | { type: 'error' };

/**
 * The reducer function for the image state.
 *
 * @param state The image's current state.
 * @param action The action to apply to the state.
 * @returns The image's new state.
 */
function reducer(state: ImageState, action: Action): ImageState {
  if (action.type === 'update') {
    return { state: 'loading', src: action.src };
  }

  return { ...state, state: action.type };
}

export type ImageProps = Omit<NextImageProps, 'ref'> & {
  /**
   * The URL of the image.
   */
  src: string;

  /**
   * An alternative text description of the image's content.
   */
  alt: string;

  /**
   * The component to display if the image fails to load.
   *
   * @example
   *
   * ```tsx
   * <CoordinatedImage
   *   src="https://example.com/image.png"
   *   alt="An example image"
   *   fallback={<div>Failed to load image</div>}
   * />
   * ```
   */
  fallback?: React.ReactNode;

  /**
   * The group of images to coordinate with.
   *
   * This should match the same group passed to the `ImageCoordinator`
   * component.
   */
  group?: ImageCoordinatorGroup;

  /**
   * Additional content to display within the image.
   *
   * Renders additional content at the bottom of the image, such as a caption or
   * a description.
   */
  caption?: React.ReactNode;

  /**
   * Classes to apply to specific sections of the component.
   */
  classes?: { container?: string; image?: string };
};

/**
 * Renders an image with coordinated loading behavior.
 *
 * This component is an extension of Next.js' `Image` component, which listens
 * to an image's various states and emits them to a parent `ImageCoordinator`
 * component, allowing for coordinated loading and reveal effects across multiple
 * images.
 *
 * Inspired by: https://twitter.com/devongovett/status/1839355629179486428.
 *
 * @example
 *
 * ```tsx
 * import { ImageCoordinator, CoordinatedImage } from '@/systems/image';
 *
 * const images = [
 *   {
 *     name: 'Castlevania',
 *     src: 'https://image.tmdb.org/t/p/original/ubDtIBwdS9b29sBofAkqWz3PqkT.jpg',
 *   },
 *
 *   {
 *     name: 'Mob Psycho 100',
 *     src: 'https://image.tmdb.org/t/p/original/vR7hwaGQ0ySRoq1WobiNRaPs4WO.jpg',
 *   },
 *
 *   {
 *     name: 'Trigun',
 *     src: 'https://image.tmdb.org/t/p/original/lwLFZFB3S2PeOLtWksaWerF6B4D.jpg',
 *   },
 * ];
 *
 * export default function Home(): JSX.Element {
 *   return (
 *     <ImageCoordinator className='flex flex-row gap-2'>
 *       {images.map((image) => (
 *         <CoordinatedImage
 *           key={image.name}
 *           src={image.src}
 *           alt={image.name}
 *           className='h-[285px] w-[185px] rounded'
 *         />
 *       ))}
 *     </ImageCoordinator>
 *   );
 * }
 * ```
 */
export function CoordinatedImage({
  src,
  alt,
  className,
  caption,
  fallback,
  classes,
  group = DefaultImageGroup,
  ...props
}: ImageProps) {
  const { revealAll, register, unregister, load, timedOut } = useContext(group);
  const [{ state, src: lastSrc }, dispatch] = useReducer(reducer, { state: 'loading', src });

  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (src !== lastSrc) {
      dispatch({ type: 'update', src });
    }
  }, [src, lastSrc]);

  useEffect(() => {
    if ((state === 'loaded' && revealAll) || timedOut) {
      dispatch({ type: 'revealed' });
    }
  }, [state, revealAll, timedOut]);

  useLayoutEffect(() => {
    register(src);

    return () => {
      unregister(src);
    };
  }, [register, unregister, src]);

  /**
   * Callback for when the image has loaded.
   *
   * This marks the image as loaded, allowing the parent `ImageCoordinator`
   * component to determine when all images within the same group have loaded.
   */
  const onLoad = useCallback(async () => {
    load(src);
    dispatch({ type: 'loaded' });
  }, [load, src]);

  /**
   * Callback for when the image has failed to load.
   *
   * If the image fails to load, the image is removed from the group and
   * ignored.
   */
  const onError = useCallback(() => {
    unregister(src);
    dispatch({ type: 'error' });
  }, [unregister, src]);

  const reveal = state !== 'error' && (state === 'revealed' || revealAll);

  // biome-ignore lint/correctness/useExhaustiveDependencies: only watch for specific dependencies.
  return useMemo(
    () => (
      <div className={cn('relative', className, classes?.container)}>
        <NextImage
          width='0'
          height='0'
          src={src}
          alt={alt}
          onLoad={onLoad}
          onError={onError}
          className={cn(
            className,
            classes?.image,
            'transition-opacity',
            reveal ? 'opacity-100' : 'opacity-0',
          )}
          loading='eager'
          {...props}
          ref={imgRef}
        />

        {state === 'error' && (
          <Caption
            shadow={false}
            classes={{ text: 'text-card-foreground-dark' }}
            text={fallback ?? 'Failed to load image.'}
          />
        )}

        {caption && reveal && <Caption shadow text={caption} />}

        {!reveal && (
          <Skeleton
            className={cn('absolute top-0 left-0 h-full w-full', className, classes?.image)}
          />
        )}
      </div>
    ),
    [src, alt, className, onLoad, onError, reveal, caption, fallback, classes],
  );
}
