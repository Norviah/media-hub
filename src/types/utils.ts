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
