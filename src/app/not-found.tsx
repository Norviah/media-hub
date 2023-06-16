import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import { ThemeSelector } from '@/components/ThemeSelector';

export default function notFound(): JSX.Element {
  return (
    <>
      <div className="absolute right-4 top-4 flex gap-2 md:right-8 md:top-9">
        <ThemeSelector />
      </div>
      <div className="flex h-[calc(100vh-80px)] w-full items-center justify-center text-foreground ">
        <div className="p-28 text-center">
          <h1 className="mt-5 text-[36px] font-bold lg:text-[50px]">404 - Page not found</h1>
          <p className="mb-5 text-left text-base  md:text-xl">
            {
              "Oops! The page you're looking for isn't here. You might have the wrong address, or the page may have moved."
            }
          </p>

          <Link href="/">
            <Button>Home</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
