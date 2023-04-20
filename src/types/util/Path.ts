// import { JsonValue } from 'type-fest';

// type PathImpl<T, K extends keyof T> = K extends string
//   ? T[K] extends Record<string, any>
//     ? T[K] extends ArrayLike<any>
//       ? `${K}.${PathImpl<T[K], Exclude<keyof T[K], keyof any[]>>}`
//       : `${K}.${PathImpl<T[K], keyof T[K]>}`
//     : K
//   : never;

// export type Path<T> = keyof T | PathImpl<T, keyof T>;

// export type PathValue<T, P extends Path<T>> = P extends `${infer K}.${infer Rest}`
//   ? K extends keyof T
//     ? Rest extends Path<T[K]>
//       ? PathValue<T[K], Rest>
//       : never
//     : never
//   : P extends keyof T
//   ? T[P]
//   : never;

type DeepPath<T extends Record<string, any>, K extends keyof T> = K extends string
  ? //
    NonNullable<T[K]> extends Record<string, T[K][keyof T]>
    ? K | `${K}.${DeepPath<T[K], keyof T[K]>}`
    : K
  : never;

export type Path<T extends Record<string, any>> = keyof T | DeepPath<T, keyof T>;

export type PathValue<
  T extends Record<string, any>,
  P extends Path<T>
> = P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? Rest extends Path<T[K]>
      ? PathValue<T[K], Rest>
      : never
    : never
  : P extends keyof T
  ? T[P]
  : never;

// export type Keys<T, K extends keyof T = keyof T> = K extends string ? (T[K] extends Record<string, any> ? (T[K] extends ArrayLike<any> ? K : `${K}.${Keys<T[K]>}`) : K) : never;
// NonNullable<T[K]> extends Record<string, T[K][keyof T]>
export type Keys<T extends Record<string, any>, K extends keyof T = keyof T> = K extends string
  ? //
    NonNullable<T[K]> extends Record<string, T[K][keyof T]>
    ? `${K}.${Keys<T[K]>}`
    : K
  : never;

// // declare function k<T, P extends Keys<T>>(key: P, value: JsonValue): { success: true; value: PathValue<T, P> } | { success: false };

// interface C {
//   prefix: string;
//   token: boolean;

//   parent: {
//     child: {
//       key: string;
//     };
//   };

//   settings: {
//     mentionAll: string;
//     enable: boolean;
//     something: string;

//     deeper: {
//       deeper: {
//         sub: string;
//       };
//     };
//   };

//   arr: string[];
// }

// declare function get<T extends Record<string, any>, P extends Path<T>>(obj: T, path: P): PathValue<T, P>;

// type d = Path<C>;
// type c = Keys<C>;
// type x = PathValue<C, 'settings.deeper.deeper.sub'>;
// type l = Path<C>;

// // const c = get({} as C,
