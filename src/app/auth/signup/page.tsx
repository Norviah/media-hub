import Link from 'next/link';

import { Logo } from '@/components/icons/Logo';
import { AuthForm } from '@/systems/auth/components/AuthForm';

import type { PageProps } from '@/types/components/PageProps';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Create an account',
};

export default function SignInPage(props: PageProps): JSX.Element {
  const fromParam: string | string[] | undefined = props.searchParams?.from;
  const from: string = fromParam ? encodeURI(Array.isArray(fromParam) ? fromParam[0] : fromParam) : '/';

  return (
    <>
      <div className="flex flex-col space-y-2">
        <Logo className="mx-auto h-12 w-12 align-middle" />
        <h1 className="text-center text-2xl font-semibold tracking-tight">Create an account</h1>
        <p className="text-sm text-muted-foreground">Please use one of the following methods to create your account</p>
      </div>
      <AuthForm callbackUrl={from} />
      <p className="text-right text-sm text-muted-foreground">
        <Link
          href={`/auth/signin?from=${from}`}
          className="underline underline-offset-4 transition-colors hover:text-primary"
        >
          Already have an account? Sign in here.
        </Link>
      </p>
    </>
  );
}
