import * as user from './user';

export const userAuthSchema = user.Object.pick({
  email: true,
});
