'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { CalendarDays, ChevronDownIcon, HomeIcon } from 'lucide-react';
import { ThemeSelector } from '@/components/ThemeSelector';

import { Button } from '@/components/ui/Button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/HoverCard';

function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button variant="link">@nextjs</Button>
        {/* <Link className="text-primary hover:underline" href="#" content="@nextjs" /> */}
        {/* @nextjs
        </Link> */}
      </HoverCardTrigger>
      <HoverCardContent className="w-80 shadow-xl">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{' '}
              <span className="text-xs text-muted-foreground">Joined December 2021</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

import { BellRing, Check } from 'lucide-react';

import { cn } from '@/utils/cn';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardNextImage,
  CardTitle,
} from '@/components/ui/Card';
import { Separator } from '@/components/ui/Separator';
import { Switch } from '@/components/ui/Switch';

const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
];

type CardProps = React.ComponentProps<typeof Card>;

function CardDemo({ className, ...props }: CardProps) {
  return (
    <Card className={cn('w-[380px]', className)} {...props}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Push Notifications</p>
            <p className="text-sm text-muted-foreground">Send notifications to device.</p>
          </div>
          <Switch />
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-nord-green" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{notification.title}</p>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  );
}

function CardDemo2({ className, ...props }: CardProps) {
  return (
    <Card className={cn('w-[380px]', className)} {...props}>
      {/* @ts-expect-error ddsadsa */}
      <CardImage src="https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8" />
      <CardHeader>
        <CardTitle>Arctic</CardTitle>
        {/* <CardDescription>You have 3 unread messages.</CardDescription> */}
      </CardHeader>
      <CardContent className="grid">
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur{' '}
          <UserHoverCard user={'cligv0n8w0000j71lf9xc5m1u'} /> elit. Maecenas molestie pellentesque
          ipsum. Ut id convallis nisi. Aliquam feugiat maximus blandit. Duis viverra fringilla
          imperdiet. Proin efficitur euismod sapien, eu dictum orci rutrum eget.
        </p>
      </CardContent>
      <Separator className="mb-5" />
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  );
}

// import { ToastAction } from '@/components/ui/Toast';
// import { useToast } from '@/hooks/useToast';

// import { PageProps } from '@/../.next/types/app/(dashboard)/layout';
import { ToastAction, toast } from '@/components/ui/Toast';
import { UserHoverCard } from '@/components/UserHoverCard';
import { Blockquote, CodeBlock } from '@/components/ui/Typography';
import UnorderedList from '@/components/ui/Typography/components/UnorderedList';
// import { PageTitle } from '@/components/PageTitle';

import { PageBody, PageTitle } from '@/components/ui/Page';

// interface PageTitleProps {
//   heading: string;
//   text?: string;
//   type?: HeaderProps['type'];
// }

// function Page({ children }: { children: React.ReactNode }): JSX.Element {
//   // return <div className="mx-auto max-w-3xl px-4">{children}</div>;
//   return <>{children}</>;
// }

// function PageTitle(props: PageTitleProps): JSX.Element {
//   const header = props.type ?? 'h2';

//   return (
//     <>
//       <div className="flex items-center justify-between">
//         <div className="grid gap-1">
//           <Header type={header} className={header === 'h2' ? 'border-none' : undefined}>
//             {props.heading}
//           </Header>
//           {props.text && <p className="text-lg text-muted-foreground">{props.text}</p>}
//         </div>
//       </div>
//     </>
//   );
// }

// function PageBody({ children }: { children: React.ReactNode }): JSX.Element {
//   return <div className="mt-10">{children}</div>;
// }

export default function Home() {
  return (
    <>
      <PageTitle heading="Home" />
      <PageBody>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <br />
        <HoverCardDemo />
        <br />
        <CardDemo />
        <br />
        <CardDemo2 />
        <br />
        <ThemeSelector />
        <NavigationMenuDemo />
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: 'Scheduled: Catch up ',
              description: 'Friday, February 10, 2023 at 5:57 PM',
              // action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
              action: <Button variant="ghost">Undo</Button>,
            });
          }}
        >
          Add to calendar
        </Button>
        <div className="mb-5 mt-5">
          <Button variant="ghost">
            MENU
            <ChevronDownIcon
              className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
              aria-hidden="true"
            />
          </Button>
        </div>
        <UnorderedList>
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
        </UnorderedList>
        <div className="grid grid-cols-5 gap-5">
          <Button variant="default">Button</Button>
          <Button variant="secondary">Button</Button>
          <Button variant="destructive">Button</Button>
          <Button variant="success">Button</Button>
          <Button variant="warn">Button</Button>
          <Button variant="ghost">Button</Button>
          <Button variant="link">Button</Button>
          <Button variant="outline">Button</Button>
        </div>
        <div className="mb-10">
          <Blockquote>
            {
              "After all, everyone enjoys a good joke, so it's only fair that they should pay for the privilege."
            }
          </Blockquote>
        </div>
        <CodeBlock>#include {'<stdio.h>'}</CodeBlock>
        <div>
          Lorem ipsum dolor sit amet, consectetur <HoverCard /> elit. Maecenas molestie pellentesque
          ipsum. Ut id convallis nisi. Aliquam feugiat maximus blandit. Duis viverra fringilla
          imperdiet. Proin efficitur euismod sapien, eu dictum orci rutrum eget.
          <UserHoverCard user={'cligv0n8w0000j71lf9xc5m1u'} /> elit. Maecenas molestie pellentesque
          ipsum. Ut id convallis nisi. Aliquam feugiat maximus blandit. Duis viverra fringilla
          imperdiet. Proin efficitur euismod sapien, eu dictum orci rutrum eget.
        </div>
      </PageBody>
    </>
  );
}

import * as React from 'react';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  triggerStyles as navigationMenuTriggerStyle,
} from '@/components/ui/NavigationMenu';
import { FlipIcon } from '@/components/FlipIcon';
import Head from 'next/head';
// import { Icons } from '@/components/icons';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
