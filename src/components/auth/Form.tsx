'use client';

import { toast } from 'sonner';
import { cn } from '@/utils/cn';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { DiscordIcon } from '@/components/icons/Discord';
import { GoogleIcon } from '@/components/icons/Google';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

import * as schemas from '@/schemas';

type FormData = z.infer<typeof schemas.auth.userAuthSchema>;

export function Form(props: { callbackUrl: string }): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schemas.auth.userAuthSchema),
  });

  const [isEmailLoading, setEmailLoading] = useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);
  const [isDiscordLoading, setIsDiscordLoading] = useState<boolean>(false);

  const loading = isEmailLoading || isGoogleLoading || isDiscordLoading;

  async function onSubmit(data: FormData) {
    setEmailLoading(true);

    const signInResult = await signIn('email', {
      email: data.email.toLowerCase(),
      redirect: false,
      callbackUrl: props.callbackUrl,
    });

    setEmailLoading(false);

    if (!signInResult?.ok || signInResult?.error === 'EmailSignin') {
      return toast.error('Something went wrong.', {
        description: 'Your sign in request failed. Please try again.',
      });
    }

    return toast.message('Check your email', {
      description: 'A login link has been sent to your email, be sure to check your spam too.',
    });
  }

  return (
    <div className={cn('grid gap-6')}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@domain.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={loading}
              error={errors?.email?.message}
              {...register('email')}
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
        <Button
          variant="outline"
          type="button"
          disabled={loading}
          loading={isGoogleLoading}
          onClick={() => {
            setIsGoogleLoading(true);
            signIn('google', {
              callbackUrl: props.callbackUrl,
            });
          }}
        >
          <GoogleIcon className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          type="button"
          disabled={loading}
          loading={isDiscordLoading}
          onClick={() => {
            setIsDiscordLoading(true);
            signIn('discord', {
              callbackUrl: props.callbackUrl,
            });
          }}
        >
          <DiscordIcon className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
