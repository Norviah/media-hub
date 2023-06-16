import Link from 'next/link';

import { Logo } from '@/components/Logo';
import { Form } from '../(layout)/components/Form';

import type { PageProps } from '@/types/PageProps';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your account',
};

export default function SignInPage(props: PageProps): JSX.Element {
  // const { error } = props.searchParams;

  // if (error) {
  //   toast({
  //     title: 'Error',
  //     description: ERRORS[error] ?? 'An unknown error occurred, please try again in a few minutes.',
  //     variant: 'success',
  //   });
  // }

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <Logo className="mx-auto h-12 w-12 align-middle" />
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">Enter your email to sign in to your account</p>
      </div>
      <Form callbackUrl={props.searchParams.from} />
      <p className="text-right text-sm text-muted-foreground">
        <Link
          href={
            `/auth/signup` + (props.searchParams.from ? `?from=${props.searchParams.from}` : ``)
          }
          className="underline underline-offset-4 transition-colors hover:text-primary"
        >
          Don&apos;t have an account? Sign Up
        </Link>
      </p>
    </>
  );
}
