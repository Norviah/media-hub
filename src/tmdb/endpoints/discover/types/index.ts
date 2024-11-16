export type AndOr<Type> =
  | {
      and?: Type[];
    }
  | {
      or?: Type[];
    };
