import { Component } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

import type { DocumentProps } from 'next/document';

/**
 * The entry point for the application.
 *
 * In a Next.js application, the `_document` component is a special component
 * that customizes the server-rendered HTML document for the web application.
 * @see https://nextjs.org/docs/advanced-features/custom-document
 */
export default class Document extends Component<unknown, DocumentProps> {
  public render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
          <meta name="msapplication-TileColor" content="#81a1c1" />
          <meta name="theme-color" content="#81a1c1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
