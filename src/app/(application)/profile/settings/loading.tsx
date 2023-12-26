import { Body, Title } from '@/components/ui/Page';
import { UpdateNameFormSkeleton } from '@/systems/profile/components/UpdateNameFormSkeleton';

export default function Loading(): JSX.Element {
  return (
    <>
      <Title heading="Settings" subtitle="Manage account settings." />
      <Body>
        <UpdateNameFormSkeleton />
      </Body>
    </>
  );
}
