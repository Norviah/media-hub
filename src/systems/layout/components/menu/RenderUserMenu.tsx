import { getCurrentUser } from '@/systems/auth/util/session';
import { UserMenu } from './UserMenu';

export async function RenderUserMenu(): Promise<JSX.Element> {
  const user = await getCurrentUser();

  return <UserMenu user={user} />;
}
