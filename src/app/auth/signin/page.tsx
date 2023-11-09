import Link from 'next/link';

import { Form } from '@/components/auth/Form';
import { Logo } from '@/components/icons/Logo';

import type { PageProps } from '@/types/components/PageProps';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your account',
};

export default function SignInPage(props: PageProps): JSX.Element {
  const fromParam: string | string[] | undefined = props.searchParams?.from;
  const from: string = fromParam ? encodeURI(Array.isArray(fromParam) ? fromParam[0] : fromParam) : '/';

  return (
    <>
      <div className="flex flex-col space-y-2">
        <Logo className="mx-auto h-12 w-12 align-middle" />
        <h1 className="text-center text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">Please use one of the following methods to sign into your account</p>
      </div>
      <Form callbackUrl={from} />
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
