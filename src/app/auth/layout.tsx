import Link from 'next/link';

import { ThemeSelector } from '@/components/ThemeSelector';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/Button';

import type { LayoutProps } from '@/types/components/LayoutProps';

export default function AuthLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header div="justify-end" container="absolute w-full">
        <div className="flex gap-1">
          <ThemeSelector />
          <Link href="/">
            <Button variant="ghost">Home</Button>
          </Link>
        </div>
      </Header>

      <div className="h mx-auto flex h-screen w-full flex-col justify-center space-y-6 sm:w-[350px]">{children}</div>
    </>
  );
}
