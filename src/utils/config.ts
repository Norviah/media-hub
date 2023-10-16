import { League_Spartan as LeagueSpartan } from 'next/font/google';
import type { Metadata } from 'next';

export const site = {
  metadata: {
    title: {
      default: 'Media Hub',
      template: '%s | Media Hub',
    },
    description: 'A place to create various collections of your favorite media.',
    authors: [
      {
        name: 'norviah',
        url: 'https://norviah.com',
      },
    ],
    creator: 'norviah',
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
  } satisfies Metadata,
};

export const font = LeagueSpartan({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
