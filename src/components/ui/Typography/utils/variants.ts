import { cva } from 'class-variance-authority';

export const headers = cva('scroll-m-20', {
  variants: {
    type: {
      h1: 'text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
      h3: 'text-2xl font-semibold tracking-tight',
      h4: 'text-xl font-semibold tracking-tight',
    },
  },
});
