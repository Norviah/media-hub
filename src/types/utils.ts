import type { LucideIcon } from 'lucide-react';
import type { Route } from 'next';

export interface RouteItem<Path extends string = string> {
  title: string;
  icon: LucideIcon;
  path: Route<Path>;
}

/**
 * Represents a primitive value.
 */
export type Primitive = string | number | boolean | null;

/**
 * Ensures that a record contains values constrained to a specific type.
 *
 * This type takes in a record and ensures that all values adhers to the
 * specified type.
 *
 * @template T The type of the record to constrain.
 * @template V The type to constrain the values to.
 *
 * @example
 *
 * As an example, we'll declare a function that only accepts records with string
 * values.
 *
 * ```ts
 * declare function onlyStringsSchema<T extends ConstrainedRecord<T, string>>(): void;
 * ```
 *
 * If we create a schema with any non-string values, the function will throw an
 * error.
 *
 * ```ts
 * type Schema = {
 *   a: string;
 *   b: number;
 * }
 *
 * onlyStringsSchema<Schema>(); // Error: Type 'number' is not assignable to type 'string'.
 *
 * type Schema = {
 *   a: string;
 *   b: string;
 * }
 *
 * onlyStringsSchema<Schema>(); // OK
 * ```
 */
export type ConstrainedRecord<T extends Record<string, unknown>, V = Primitive | Primitive[]> = {
  [K in keyof T]: T[K] extends V ? T[K] : never;
};

/**
 * Make all properties in `T` explicitly need a value.
 *
 * `Explicit` constructs a new type where all properties within the original
 * interface are explicitly required. This differs from `Required` in that it
 * does not make any optional properties required, all properties must simply
 * need to be explicitly provided.
 *
 * @template T The provided interface.
 * @example
 *
 * ```ts
 * interface Person {
 *   name: string;
 *   job?: string;
 * }
 *
 * // => Error: As `job` is required.
 *
 * const person: Required<Person> = {
 *   name: "John Appleseed",
 *   job: undefined,
 * }
 *
 * // => No error, as `job` is still optional, but must be explicitly provided.
 *
 * const person: Explicit<Person> = {
 *   name: "John Appleseed",
 *   job: undefined,
 * };
 * ```
 */
export type Explicit<T> = {
  [K in keyof Required<T>]: T[K];
};

/**
 * Ensures that the specified subset of keys in an interface are non-nullable.
 *
 * This type merges an interface with a subset of its keys, marking these
 * properties as required and non-nullable, ensuring that they are provided.
 *
 * @template T The interface to merge.
 * @template K The subset of keys to mark as required and non-nullable.
 *
 * @example
 *
 * ```ts
 * interface Person {
 *   name: string;
 *   job?: string;
 * }
 *
 * declare function greet(person: With<Person, 'job'>): void;
 *
 * const unemployedPerson: Person = {
 *   name: 'John Doe'
 * };
 *
 * greet(unemployedPerson); // Error: `job` is required
 *
 * const employedPerson: With<Person, 'job'> = {
 *   name: 'John Doe',
 *   job: 'Software Engineer'
 * };
 *
 * greet(employedPerson); // OK
 * ```
 */
export type With<T, K extends keyof T> = T & {
  [P in keyof Explicit<T>]: P extends K ? NonNullable<T[P]> : T[P];
};

/**
 * Generates the properties for a component with support for a skeleton state.
 *
 * This type generates the necessary structure for components that has both a
 * skeleton/loading state and a fully rendered state. It ensures that the
 * correct properties are provided based on whether if the component is
 * rendering a skeleton or its actual content.
 *
 * When defined, `SkeletalProps` takes in a base record and extends it by
 * creating a new record with a `skeleton` boolean property. If this property is
 * set, all other properties must not be set, and vice-versa.
 *
 * @template T The base structure for the component's properties.
 * @template Keep Any specified keys to ensure is present for both the skeleton
 * and content state.
 *
 * @example
 *
 * ```tsx
 * export type ImageCardProps = SkeletalProps<
 *   {
 *     url: string;
 *     alt: string;
 *     className?: string;
 *   },
 *   'className'
 * >;
 *
 * export function ImageCard({ url, alt, className, skeleton }: ImageCardProps) {
 *   if (skeleton) {
 *     url; // not present
 *     alt; // not present
 *
 *     // skeleton state
 *   } else {
 *     url; // present
 *     alt; // present
 *
 *     // actual content
 *   }
 * }
 * ```
 *
 * When calling this component, the properties are dependent on whether if
 * `skeleton` is given.
 *
 * ```tsx
 * <ImageCard skeleton className='rounded' />;
 * <ImageCard url='https://github.com/norviah' alt='norviah' className='rounded' />;
 * ```
 */
export type SkeletalProps<T extends Record<string, unknown>, Keep extends keyof T | null = null> =
  | ({ skeleton?: undefined } & T)
  | ({ skeleton: true } & Partial<Record<Exclude<keyof T, Keep>, undefined>> &
      Omit<T, Exclude<keyof T, Keep>>);
