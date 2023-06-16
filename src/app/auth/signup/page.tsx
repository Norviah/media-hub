import Link from 'next/link';

import { Logo } from '@/components/Logo';
import { Form } from '../(layout)/components/Form';

import type { PageProps } from '@/types/PageProps';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Create an account',
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
        <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to create your account
        </p>
      </div>
      <Form callbackUrl={props.searchParams.from} />
      <p className="text-right text-sm text-muted-foreground">
        <Link
          href={
            `/auth/signin` + (props.searchParams.from ? `?from=${props.searchParams.from}` : ``)
          }
          className="underline underline-offset-4 transition-colors hover:text-primary"
        >
          Already have an account? Sign In
        </Link>
      </p>
    </>
  );
}
