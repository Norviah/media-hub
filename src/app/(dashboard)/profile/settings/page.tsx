import { getCurrentUser } from '@/utils/auth/session';
import { redirect } from 'next/navigation';

import { PageBody, PageTitle } from '@/components/ui/Page';
import { UserNameForm } from './(layout)/components/Form';

export const metadata = {
  title: 'Settings',
  description: 'Manage account settings.',
};

export default async function Settings(): Promise<JSX.Element> {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/auth/signin');
  }

  return (
    <>
      <PageTitle heading="Settings" text="Manage account settings." />
      <PageBody>
        <UserNameForm user={{ id: user.id, name: user.name || '' }} />
      </PageBody>
    </>
  );
}
