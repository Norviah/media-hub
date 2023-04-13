export function merge<T>(object1: T, object2: T): T {
  const mergedObject = {} as T;

  for (const key in object1) {
    if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      mergedObject[key] = merge(object1[key], object2[key]);
    } else {
      mergedObject[key] = object1[key];
    }
  }

  for (const key in object2) {
    if (typeof object1[key] === 'undefined') {
      mergedObject[key] = object2[key];
    }
  }

  return mergedObject;
}
