import { cva } from 'class-variance-authority';

export const variants = cva(
  'data-[swipe=move]:transition-none group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md p-6 pr-8 transition-shadow data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-left-full mt-2 mb-2 shadow-lg hover:shadow-xl',
  {
    variants: {
      variant: {
        default: 'bg-background bg-card',
        destructive:
          'group destructive border-destructive bg-destructive text-destructive-foreground',
        warn: 'group warn border-warn bg-warn text-warn-foreground',
        success: 'group bg-card',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
