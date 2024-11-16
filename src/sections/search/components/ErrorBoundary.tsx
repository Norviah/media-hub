'use client';

import { Button } from '@/components/ui/Button';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Header } from '@/components/ui/Header';
import { DynamicLink } from '@/components/DynamicLink';

import type { ErrorProps } from '@/types';

export function ErrorHandler({ error, reset }: ErrorProps): JSX.Element {
  return (
    <div className='space-y-5'>
      <div className='space-y-1'>
        <Header type='h4'>An error occurred</Header>

        <div className='space-y-2'>
          <p>An error occurred while searching for the specified query, please try again later.</p>

          <p>
            If the error still continues to occur, please report the issue by following the{' '}
            <DynamicLink href='/docs/troubleshooting/parsing-issues'>
              steps in this guide
            </DynamicLink>
            , which will help bring the issue to my attention. Use the following error code when
            reporting the issue:
          </p>
        </div>
      </div>

      <CodeBlock copy content={`message: ${error.message}\n\nstack: ${error.stack}`}>
        <p>{error.message}</p>

        <br />

        {error.stack && <p className='whitespace-pre-wrap'>{error.stack}</p>}
      </CodeBlock>

      <Button onClick={reset} variant='outline'>
        Refresh
      </Button>
    </div>
  );
}
