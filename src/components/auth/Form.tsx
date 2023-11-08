'use client';

import { DiscordIcon } from '@/components/icons/Discord';
import { GoogleIcon } from '@/components/icons/Google';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

import { cn } from '@/utils/cn';
import { useState } from 'react';

export function Form(props: { callbackUrl: string }): JSX.Element {
  const [isEmailLoading, setEmailLoading] = useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);
  const [isDiscordLoading, setIsDiscordLoading] = useState<boolean>(false);

  const loading = isEmailLoading || isGoogleLoading || isDiscordLoading;

  return (
    <div className={cn('grid gap-6')}>
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={loading}
            />
          </div>

          <Button disabled={loading} loading={isEmailLoading}>
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" type="button" disabled={loading} loading={isGoogleLoading}>
          <GoogleIcon className="h-4 w-4" />
        </Button>

        <Button variant="outline" type="button" disabled={loading} loading={isDiscordLoading}>
          <DiscordIcon className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
