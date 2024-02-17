// import { CopyrightIcon } from 'lucide-react';

// export function Footer(): JSX.Element {
//   return (
//     <footer className="border-t bg-background/80">
//       <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
//         <div className="flex font-semibold lg:flex-1">
//           <p>
//             The<span className="text-primary">Board</span>
//           </p>
//         </div>

//         <span>
//           <div className="flex gap-2">
//             <CopyrightIcon className="h-5 w-5 text-muted-foreground" />
//             <span className="text-sm">TheBoard Edu 2024</span>
//           </div>
//         </span>
//       </div>
//     </footer>
//   );
// }

import Link from 'next/link';

import { Separator } from '@/components/ui/Separator';
import { InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

const footer = {
  sections: [
    {
      title: 'Solutions',
      links: [
        { title: 'Marketing', href: '/' },
        { title: 'Analytics', href: '/' },
        { title: 'Commerce', href: '/' },
        { title: 'Insights', href: '/' },
      ],
    },
    {
      title: 'Support',
      links: [
        { title: 'Pricing', href: '/' },
        { title: 'Documentation', href: '/' },
        { title: 'Guides', href: '/' },
        { title: 'API Status', href: '/' },
      ],
    },
    {
      title: 'Company',
      links: [
        { title: 'About', href: '/' },
        { title: 'Blog', href: '/' },
        { title: 'Jobs', href: '/' },
        { title: 'Press', href: '/' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { title: 'Privacy', href: '/' },
        { title: 'Terms', href: '/' },
      ],
    },
  ],
};

export function PageFooter(): JSX.Element {
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col gap-7 text-sm text-muted-foreground sm:py-16">
        <div className="flex justify-between">
          <div className="flex flex-row gap-3">
            <Link href="/" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <p className="text-[10px]">•</p>
            <Link href="/" className="transition-colors hover:text-foreground">
              Terms
            </Link>
          </div>

          <div className="flex flex-row gap-3">
            <InstagramIcon className="h-5 w-5 transition-colors hover:cursor-pointer hover:text-foreground" />
            <TwitterIcon className="h-5 w-5 transition-colors hover:cursor-pointer hover:text-foreground" />
            <LinkedinIcon className="h-5 w-5 transition-colors hover:cursor-pointer hover:text-foreground" />
          </div>
        </div>

        <Separator className="w-full" />

        <div className="flex justify-center">© 2024 TheBoard</div>
      </div>
    </footer>
  );
}
