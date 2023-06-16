// fonts
// - outfit
// - jost
// - lato
// - nunito
// - mukta

// - spektral - old style feel

import { Outfit as Outfit } from 'next/font/google';

import { ThemeProvider } from '@/components/ThemeProvider';
import { ToastProvider } from '@/components/ToastProvider';
import { TailwindIndicator } from '@/components/TailwindIndicator';

import { siteConfig } from '@/config/site';
import { cn } from '@/utils/cn';

import type { LayoutProps } from '@/types/LayoutProps';

import '@/styles/globals.css';

const font = Outfit({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  title: siteConfig.name,
};

export default function RootLayout(props: LayoutProps): JSX.Element {
  return (
    <>
      <html lang="en">
        <head>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
        </head>
        <body className={cn('min-h-screen antialiased', font.className)}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {props.children}
          </ThemeProvider>
          <TailwindIndicator />
          <ToastProvider />
        </body>
      </html>
    </>
  );
}
