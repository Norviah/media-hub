import { z } from 'zod';
import { usernameSchema } from '@/schemas/user';

export const NameObject = z.object({
  username: usernameSchema,
});

export type FormData = z.infer<typeof NameObject>;
