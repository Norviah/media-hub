import { TailwindIndicator } from '@/components/TailwindIndicator';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ToastProvider } from '@/components/ToastProvider';
import { TRPCProvider } from '@/components/TRPCProvider';

import { cn } from '@/utils/cn';

import type { LayoutProps } from '@/types/components/LayoutProps';
import type { Metadata } from 'next';

import * as config from '@/utils/config';

import '@/styles/globals.css';

export const metadata: Metadata = config.site.metadata;

export default function RootLayout(props: LayoutProps): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className={cn('min-h-screen antialiased', config.font.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TRPCProvider>{props.children}</TRPCProvider>
        </ThemeProvider>
        <TailwindIndicator />
        <ToastProvider />
      </body>
    </html>
  );
}
