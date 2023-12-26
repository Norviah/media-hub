import { Body, Title } from '@/components/ui/Page';

import { getCurrentUser } from '@/systems/auth/util/session';
import { redirect } from 'next/navigation';

export default async function Loading(): Promise<JSX.Element> {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/auth/signin');
  }

  return (
    <>
      <Title heading="Profile" subtitle="Customize your profile." />
      <Body>Profile</Body>
    </>
  );
}
