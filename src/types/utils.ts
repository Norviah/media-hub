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
