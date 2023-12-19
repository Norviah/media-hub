'use client';

import Link from 'next/link';

import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { UserIcon } from 'lucide-react';

import type { User } from 'next-auth';

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user?: Pick<User, 'name' | 'image' | 'email'>;
}

export function UserMenu({ user }: UserAccountNavProps): JSX.Element {
  const pathname = usePathname();

  if (!user) {
    return (
      <Link href={`/auth/signin?from=${pathname}`}>
        <Button variant="ghost">Sign In</Button>
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-8 w-8">
          {user.image ? (
            <>
              <AvatarImage src={user.image} />
              <AvatarFallback>
                <span className="sr-only">{user.name?.at(0)}</span>
                <UserIcon className="h-4 w-4" />
              </AvatarFallback>
            </>
          ) : (
            <AvatarFallback>
              <span className="sr-only">{user.name?.at(0)}</span>
              <UserIcon className="h-4 w-4" />
            </AvatarFallback>
          )}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="m-2 mt-3 flex items-center justify-start gap-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && <p className="text-muted-card min-w-[150px] max-w-[200px] truncate text-sm">{user.email}</p>}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/">Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/profile/settings">Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={(event) => {
            event.preventDefault();
            signOut({
              callbackUrl: '/',
            });
          }}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
