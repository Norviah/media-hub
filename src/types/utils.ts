import type { LucideIcon } from 'lucide-react';
import type { Route } from 'next';

export interface RouteItem {
  title: string;
  icon: LucideIcon;
  path: Route;
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
 * Generates the appropriate properties for a component with support for a
 * skeleton state.
 *
 * This type generates the necessary structure for components that has both a
 * skeleton (loading) state and a fully rendered state. It ensures that the
 * correct properties are included based on whether if the component is
 * displaying a skeleton or its actual content.
 *
 * @template RequiredProps The properties that the component needs to render its
 * content.
 * @template BaseProps The base properties shared across both skeleton and
 * non-skeleton state.
 *
 * @example
 *
 * ```tsx
 *  export type ImageCardProps = SkeletalProps<{ url: string; alt: string }>;
 *
 *  export function ImageCard(props: ImageCardProps): JSX.Element {
 *    if (props.skeleton) {
 *      return <Skeleton /* ... *\/ />;
 *    }
 *
 *    return <img src={props.url} alt={props.alt} />;
 *  }
 * ```
 *
 * When we want to render a skeleton, we can do so as `<ImageCard skeleton />`,
 * which does not require the `url` and `alt` properties.
 */
export type SkeletalProps<
  RequiredProps extends Record<string, unknown>,
  BaseProps extends Record<string, unknown> = Record<string, never>,
> =
  | (BaseProps extends Record<string, never>
      ? { skeleton?: false } & RequiredProps
      : {
          skeleton?: false;
        } & RequiredProps &
          BaseProps)
  | (BaseProps extends Record<string, never> ? { skeleton: true } : { skeleton: true } & BaseProps);
