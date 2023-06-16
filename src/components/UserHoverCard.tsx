import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { CalendarDays, HomeIcon } from 'lucide-react';
import { ThemeSelector } from '@/components/ThemeSelector';

import { Button } from '@/components/ui/Button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/HoverCard';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card';
import { Skeleton } from '@/components/ui/Skeleton';
import { Suspense } from 'react';

import { UserIcon } from 'lucide-react';
import type { User } from 'next-auth';
import Link from 'next/link';

function UserHoverCardSkeleton(): JSX.Element {
  return (
    <>
      <div className="items-left flex justify-start space-x-4">
        <Avatar className="flex items-center justify-center">
          <UserIcon />
        </Avatar>

        <div className="w-full space-y-1">
          <Skeleton className="h-4 w-1/5" />
          <Skeleton className="h-4 w-4/5" />
          <div className="flex items-center pt-2">
            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      </div>
    </>
  );
}

async function CXX(props: { id: string }): Promise<JSX.Element> {
  // const response = await fetch(`/api/users/${props.id}`, {
  //   method: 'PATCH',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });

  // console.log(response);

  return (
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
  );
}

export function UserHoverCard(props: { user: string }): JSX.Element {
  return (
    // <HoverCard>
    //   <HoverCardTrigger>
    //     <Button variant="link">@{props.user.name}</Button>
    //   </HoverCardTrigger>
    //   <HoverCardContent className="w-80 shadow-xl">
    //     <div className="flex justify-between space-x-4">
    //       <Avatar>
    //         <AvatarImage src="https://github.com/vercel.png" />
    //         <AvatarFallback>VC</AvatarFallback>
    //       </Avatar>
    //       <div className="space-y-1">
    //         <h4 className="text-sm font-semibold">@{props.user.name}</h4>
    //         <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
    //         <div className="flex items-center pt-2">
    //           <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{' '}
    //           <span className="text-xs text-muted-foreground">Joined December 2021</span>
    //         </div>
    //       </div>
    //     </div>
    //   </HoverCardContent>
    // </HoverCard>

    // <Card>
    //   <CardHeader className="gap-2">
    //     <Skeleton className="h-5 w-1/5" />
    //     <Skeleton className="h-4 w-4/5" />
    //   </CardHeader>
    //   <CardContent className="h-10" />
    //   <CardFooter>
    //     <Skeleton className="h-8 w-[120px]" />
    //   </CardFooter>
    // </Card>

    // <HoverCard>
    //   <HoverCardTrigger>
    //     <Button variant="link">@nextjs</Button>
    //   </HoverCardTrigger>
    //   <HoverCardContent className="w-80 shadow-xl">
    //     <CXX />
    //     {/* <Suspense fallback={<UserHoverCardSkeleton />}>
    //       <CXX id={'cligv0n8w0000j71lf9xc5m1u'} />
    //     </Suspense> */}
    //   </HoverCardContent>
    // </HoverCard>

    <HoverCard>
      <HoverCardTrigger>
        <Link href="/" className="text-primary hover:underline">
          @nextjs
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 shadow-xl">
        {/* <div className="flex justify-between space-x-4">
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
        </div> */}
        <Suspense fallback={<UserHoverCardSkeleton />}>
          {/* @ts-expect-error Async component */}
          <CXX />
        </Suspense>
      </HoverCardContent>
    </HoverCard>
  );
}
