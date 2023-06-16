import { CardSkeleton } from './(layout)/components/CardSkeleton';
import { PageBody, PageTitle } from '@/components/ui/Page';

export default function Loading(): JSX.Element {
  return (
    <>
      <PageTitle heading="Settings" text="Manage account settings." />
      <PageBody>
        <CardSkeleton />
      </PageBody>
    </>
  );
}
