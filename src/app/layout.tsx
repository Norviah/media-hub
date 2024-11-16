import { TailwindIndicator } from '@/components/TailwindIndicator';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ToastProvider } from '@/components/ToastProvider';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { font, siteConfig } from '@/lib/config';
import { cn } from '@/lib/utils';

import type { LayoutProps } from '@/types';
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'Shadcn', siteConfig.name],
  authors: [siteConfig.author],
  creator: siteConfig.author.name,
};

export default function RootLayout(props: LayoutProps): JSX.Element {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      </head>

      <body className={cn('min-h-screen text-foreground antialiased', font.className)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {props.children}
        </ThemeProvider>
        <TailwindIndicator />
        <Analytics />
        <SpeedInsights />
        <ToastProvider className={font.className} />
      </body>
    </html>
  );
}
