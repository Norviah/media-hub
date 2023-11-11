import { z } from 'zod';

export const email = z.string().email();

export const username = z.string().refine((value: string): boolean => {
  return /^[a-zA-Z0-9_]{3,16}$/.test(value);
}, 'String must be 3-16 characters long and contain only alphanumeric characters and underscores.');

export const object = z.object({
  email: email,
  username: username,
});

export type User = z.infer<typeof object>;
