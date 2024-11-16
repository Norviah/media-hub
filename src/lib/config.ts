import { Overpass } from 'next/font/google';

export const siteConfig = {
  name: 'Media Hub',
  description:
    'A web application that provides a place to create various collections of your favorite media.',
  url: 'https://mediahub.vercel.app',
  author: {
    name: 'Norviah',
    github: 'https://github.com/norviah',
    url: 'https://norviah.com',
  },
} as const;

export const font = Overpass({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '600', '700', '800', '900'],
});
