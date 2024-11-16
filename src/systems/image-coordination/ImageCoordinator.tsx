'use client';

import { useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useState } from 'react';
import { DefaultImageGroup } from './lib/context';

import type { ImageCoordinatorState, ImageCoordinatorGroup } from './lib/context';

type Action =
  | { type: 'register'; url: string }
  | { type: 'unregister'; url: string }
  | { type: 'load'; url: string }
  | { type: 'timeout' };

/**
 * Determines if all images within a group have loaded.
 *
 * @param images A collection of image URLs with their loading state.
 * @returns Whether if all images have been loaded.
 */
function isAllLoaded(images: Map<string, boolean>) {
  for (const isLoaded of images.values()) {
    if (!isLoaded) {
      return false;
    }
  }

  return true;
}

/**
 * A helper function to update the state of the image coordinator.
 *
 * @param state The current state of the image coordinator.
 * @param action The action to apply to the state.
 * @returns The new state of the image coordinator.
 */
function reducer(state: ImageCoordinatorState, action: Action): ImageCoordinatorState {
  const images = new Map(state.images);

  if (action.type === 'register') {
    if (state.images.get(action.url) === undefined) {
      images.set(action.url, false);
    }

    return { allLoaded: false, timedOut: state.allLoaded ? false : state.timedOut, images };
  }

  if (action.type === 'timeout') {
    return { ...state, timedOut: !state.allLoaded && !state.timedOut ? true : state.timedOut };
  }

  if (action.type === 'unregister' && state.images.has(action.url)) {
    images.delete(action.url);
  } else if (action.type === 'load' && state.images.get(action.url) === false) {
    images.set(action.url, true);
  }

  return { allLoaded: isAllLoaded(images), timedOut: state.timedOut, images };
}

export type ImageCoordinatorProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Children within the `ImageCoordinator` component.
   *
   * The children should only be `CoordinatedImage` components to support image
   * coordination.
   */
  children: React.ReactNode;

  /**
   * How long to wait in milliseconds before forcing the images to be displayed.
   *
   * If all images have not loaded within the timeout period, images will be
   * displayed regardless of their loading state.
   *
   * @default 5000
   */
  timeout?: number;

  /**
   * The group of images to coordinate with.
   *
   * All images within the same group will be displayed together once all images
   * have loaded. If not provided, the default image group is used.
   *
   * This should match the `group` prop passed to the `CoordinatedImage` component.
   */
  group?: ImageCoordinatorGroup;

  /**
   * Additional classes to apply to the container element.
   */
  className?: string;
};

/**
 * Coordinates loading behavior for a group of images.
 *
 * `ImageCoordinator` organizes and synchronizes all `CoordinatedImage` child
 * components, ensuring that all images are displayed together once all have
 * loaded.
 *
 * Inspired by: https://twitter.com/devongovett/status/1839355629179486428.
 *
 * @example
 *
 * A simple example rendering a list of images that will be displayed together
 * once all have loaded.
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
export function ImageCoordinator({
  children,
  className,
  timeout = 5000,
  group = DefaultImageGroup,
  ...props
}: ImageCoordinatorProps) {
  const [{ allLoaded: loadedAll, timedOut }, dispatch] = useReducer(reducer, {
    allLoaded: false,
    timedOut: false,
    images: new Map(),
  });

  const [revealAll, setRevealAll] = useState(false);

  /**
   * Registers an image within a group.
   *
   * Once an image is registered, the `ImageCoordinator` will listen for updates
   * on the image's loading state.
   *
   * @param url The URL of the image to register.
   */
  const register = useCallback((url: string) => {
    dispatch({ type: 'register', url });
  }, []);

  /**
   * Unregisters an image within a group.
   *
   * When an image is unregistered, the group will delete the image from its
   * collection and will no longer listen for updates.
   *
   * @param url The URL of the image to unregister.
   */
  const unregister = useCallback((url: string) => {
    dispatch({ type: 'unregister', url });
  }, []);

  /**
   * Marks an image as loaded.
   *
   * This function marks an image as loaded, allowing the `ImageCoordinator` to
   * determine when all images within the same group have loaded.
   *
   * @param url The URL of the image to mark.
   */
  const load = useCallback((url: string) => {
    dispatch({ type: 'load', url });
  }, []);

  useLayoutEffect(() => {
    setRevealAll(loadedAll || timedOut);
  }, [loadedAll, timedOut]);

  useEffect(() => {
    if (!loadedAll) {
      const timeoutId = setTimeout(() => dispatch({ type: 'timeout' }), timeout);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [loadedAll, timeout]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: only watch for specific dependencies.
  return useMemo(
    () => (
      <group.Provider value={{ revealAll, register, unregister, load, timedOut }}>
        <div className={className} {...props}>
          {children}
        </div>
      </group.Provider>
    ),

    [group, children, revealAll, register, unregister, load, className],
  );
}
