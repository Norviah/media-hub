import * as user from './user';

export const userAuthSchema = user.object.pick({
  email: true,
});
