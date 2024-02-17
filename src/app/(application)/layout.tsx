import { DesktopNav, MobileNav, PageHeader } from '@/systems/layout';
import type { LayoutProps } from '@/types/components/LayoutProps';

export default function ApplicationLayout(props: LayoutProps): JSX.Element {
  return (
    <div className="relative flex min-h-screen flex-col">
      <PageHeader>
        <DesktopNav />
        <MobileNav />
      </PageHeader>

      <main className="container py-5">{props.children}</main>
    </div>
  );
}
