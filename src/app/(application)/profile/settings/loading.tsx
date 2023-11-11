import { FormSkeleton } from '@/components/profile/settings/FormSkeleton';
import { Body, Title } from '@/components/ui/Page';

export default function Loading(): JSX.Element {
  return (
    <>
      <Title heading="Settings" subtitle="Manage account settings." />
      <Body>
        <FormSkeleton />
      </Body>
    </>
  );
}
