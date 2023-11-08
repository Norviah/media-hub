import { CommandMenu } from '@/components/CommandMenu';
import { ThemeSelector } from '@/components/ThemeSelector';
import { Header } from '@/components/layout/Header';
import { NavBar } from '@/components/layout/navigation/NavBar';

import type { LayoutProps } from '@/types/components/LayoutProps';

export default function DashboardLayout(props: LayoutProps): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <Header div="justify-between">
        <NavBar />
        <div className="flex gap-1">
          <CommandMenu />
          <ThemeSelector />
        </div>
      </Header>

      <div className="px-10 py-5">{props.children}</div>
    </div>
  );
}
