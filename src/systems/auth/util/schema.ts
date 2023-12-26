import { emailSchema } from '@/schemas/user';
import { z } from 'zod';

export const userAuthSchema = z.object({
  email: emailSchema,
});

export type FormData = z.infer<typeof userAuthSchema>;
