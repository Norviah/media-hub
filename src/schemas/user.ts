import { z } from 'zod';

export const emailSchema = z.string().email();

export const usernameSchema = z.string().refine((value: string): boolean => {
  return /^[a-zA-Z0-9_]{3,16}$/.test(value);
}, 'String must be 3-16 characters long and contain only alphanumeric characters and underscores.');
