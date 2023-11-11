import { UpdateNameForm } from '@/components/profile/settings/UpdateNameForm';
import { Body, Title } from '@/components/ui/Page';

import { getCurrentUser } from '@/utils/auth/session';
import { redirect } from 'next/navigation';

import type { Metadata } from 'next';

export const metadata: Metadata = {
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
      <Title heading="Settings" subtitle="Manage account settings." />
      <Body>
        <UpdateNameForm user={{ id: user.id, name: user.name ?? null }} />
      </Body>
    </>
  );
}
