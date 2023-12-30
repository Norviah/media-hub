import Link from 'next/link';

import { Logo } from '@/components/icons/Logo';
import { AuthForm } from '@/systems/auth/components/AuthForm';
import { AuthParams } from '@/utils/params';

import { getFirstParam } from '@/utils/getFirstParam';

import type { PageProps } from '@/types/components/PageProps';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your account',
};

export default function SignInPage({ searchParams }: PageProps): JSX.Element {
  const from = getFirstParam(searchParams, AuthParams.FROM) || '/';

  return (
    <>
      <div className="flex flex-col space-y-2">
        <Logo className="mx-auto h-12 w-12 align-middle" />
        <h1 className="text-center text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">Please use one of the following methods to sign into your account</p>
      </div>
      <AuthForm callbackUrl={from} />
      <p className="text-right text-sm text-muted-foreground">
        <Link
          href={`/auth/signup?from=${from}`}
          className="underline underline-offset-4 transition-colors hover:text-primary"
        >
          {"Don't have an account? Sign up here."}
        </Link>
      </p>
    </>
  );
}
