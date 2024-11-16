import { type Context, createContext } from 'react';

export type ImageCoordinatorManager = {
  /**
   * Whether if all images should be revealed.
   *
   * This flag determines whether if all images within the same coordinated group
   * should be revealed, either because all images have loaded or the timeout has
   * been reached.
   */
  revealAll: boolean;

  /**
   * Whether if the timeout has been reached.
   */
  timedOut: boolean;

  /**
   * Registers an image within a group.
   *
   * Once an image is registered, the `ImageCoordinator` will listen for updates
   * on the image's loading state.
   *
   * @param url The URL of the image to register.
   */
  register(url: string): void;

  /**
   * Unregisters an image within a group.
   *
   * When an image is unregistered, the group will delete the image from its
   * collection and will no longer listen for updates.
   *
   * @param url The URL of the image to unregister.
   */
  unregister(url: string): void;

  /**
   * Marks an image as loaded.
   *
   * This function marks an image as loaded, allowing the `ImageCoordinator` to
   * determine when all images within the same group have loaded.
   *
   * @param url The URL of the image to mark.
   */
  load(url: string): void;
};

export type ImageCoordinatorState = {
  /**
   * Indicates whether if all images have been loaded.
   */
  allLoaded: boolean;

  /**
   * Whether if the timeout has been reached.
   *
   * If the timeout has been reached, all images haven't been loaded yet within
   * the timeout period, and all images will be displayed regardless of their
   * state.
   */
  timedOut: boolean;

  /**
   * The collection of images that the coordinator is managing.
   *
   * A simple map of image URLs, with the value representing whether if that
   * specific image has been loaded or not.
   */
  images: Map<string, boolean>;
};

export type ImageCoordinatorGroup = Context<ImageCoordinatorManager>;

const defaultContext: ImageCoordinatorManager = {
  revealAll: false,
  timedOut: false,

  register: () => {
    return;
  },

  unregister: () => {
    return;
  },

  load: () => {
    return;
  },
};

export const DefaultImageGroup = createImageGroup();

/**
 * Creates a new group of images.
 *
 * When coordinating images, this function can be used to create a unique group
 * of images for a specific context/purpose. This allows you to create multiple
 * groups of images that coordinate independently from one another.
 *
 * @returns
 * @example
 *
 * ```tsx
 * "use client";
 *
 * import { ImageCoordinator, CoordinatedImage } from "@/systems/image";
 * import { createImageGroup } from "@/systems/image/lib";
 *
 * default function PostPage(): JSX.Element {
 *   const pictureGroup = createImageGroup();
 *   const avatarGroup = createImageGroup();
 *
 *   return (
 *     <ImageCoordinator group={pictureGroup}>
 *       <ImageCoordinator group={avatarGroup}>
 *         <Card>
 *           <CoordinatedImage src="..." group={pictureGroup} />
 *           <CoordinatedImage src="..." group={avatarGroup} />
 *         </Card>
 *
 *         <Card>
 *           <CoordinatedImage src="..." group={pictureGroup} />
 *           <CoordinatedImage src="..." group={avatarGroup} />
 *         </Card>
 *       </ImageCoordinator>
 *     </ImageCoordinator>
 *   );
 * }
 * ```
 */
export function createImageGroup(): ImageCoordinatorGroup {
  return createContext(defaultContext);
}
