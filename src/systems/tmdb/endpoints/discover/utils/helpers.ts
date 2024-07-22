import type { AndOr } from '../types/AndOr';

export const andOrToString = <T>(value: AndOr<T> | undefined): string | undefined => {
  if (!value) {
    return undefined;
  }

  if ('and' in value && value.and) {
    return value.and.join(',');
  }

  if ('or' in value && value.or) {
    return value.or.join('|');
  }
};
