// /**
//  * Merges two objects together.
//  *
//  * Given two objects, `merge` will initialize a new object consisting of
//  * properties from both objects. `overrides` will act as a source of truth
//  * for properties that exist in both objects, and will override the values
//  * of the `source` object.
//  * @template T The type of the objects.
//  * @param source The source object.
//  * @param overrides Values to override in the resulting object.
//  */
// export function merge<T>(source: T, overrides: T): T {
//   const object: Record<string, any> = {};

//   for (const key in source) {
//     if (typeof source[key] === 'object' && typeof overrides[key] === 'object') {
//       object[key] = merge(source[key], overrides[key]);
//     } else {
//       object[key] = overrides[key] ?? source[key];
//     }
//   }

//   return object as T;
// }

/**
 * Merges two objects together.
 *
 * Given two objects, `merge` will initialize a new object consisting of
 * properties from both objects. `overrides` will act as a source of truth
 * for properties that exist in both objects, and will override the values
 * of the `source` object.
 * @template T The type of the objects.
 * @param source The source object.
 * @param overrides Values to override in the resulting object.
 */
export function merge<T>(source: T, overrides: T): T {
  const object: Record<string, any> = {};

  for (const key in source) {
    if (typeof source[key] === 'object' && typeof overrides[key] === 'object') {
      object[key] = merge(source[key], overrides[key]);
    } else {
      object[key] = source[key];
    }
  }

  for (const key in overrides) {
    if (typeof source[key] === 'undefined') {
      object[key] = overrides[key];
    }
  }

  return object as T;
}
