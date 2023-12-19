import { Body, Title } from '@/components/ui/Page';
import { Skeleton } from '@/components/ui/Skeleton';

export default function Loading(): JSX.Element {
  return (
    <>
      <Title heading="Profile" subtitle="Customize your profile." />
      <Body>
        <Skeleton className="h-5 w-full" />
      </Body>
    </>
  );
}
