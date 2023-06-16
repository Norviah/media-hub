import { z } from 'zod';

export const Email = z.string().email();

export const DisplayName = z.custom<string>((value) => {
  if (typeof value !== 'string') {
    return false;
  }

  return /^[a-zA-Z0-9_]{3,16}$/.test(value);
}, 'String must be 3-16 characters long and contain only alphanumeric characters and underscores.');

export const NameObject = z.object({
  name: DisplayName,
});

export const Object = z.object({
  email: Email,
  username: DisplayName,
});
