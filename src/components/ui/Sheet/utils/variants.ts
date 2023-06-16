import { cva } from 'class-variance-authority';

export const portal = cva('fixed inset-0 z-50 flex', {
  variants: {
    position: {
      top: 'items-start',
      bottom: 'items-end',
      left: 'justify-start',
      right: 'justify-end',
    },
  },
  defaultVariants: { position: 'right' },
});

export const sheet = cva(
  'fixed z-50 scale-100 gap-4 bg-background p-6 opacity-100 shadow-lg border',
  {
    variants: {
      position: {
        top: 'animate-in slide-in-from-top w-full duration-300',
        bottom: 'animate-in slide-in-from-bottom w-full duration-300',
        left: 'animate-in slide-in-from-left h-full duration-300',
        right: 'animate-in slide-in-from-right h-full duration-300',
      },
      size: {
        content: '',
        default: '',
        sm: '',
        lg: '',
        xl: '',
        full: '',
      },
    },
    compoundVariants: [
      {
        position: ['top', 'bottom'],
        size: 'content',
        class: 'max-h-screen',
      },
      {
        position: ['top', 'bottom'],
        size: 'default',
        class: 'h-1/3',
      },
      {
        position: ['top', 'bottom'],
        size: 'sm',
        class: 'h-1/4',
      },
      {
        position: ['top', 'bottom'],
        size: 'lg',
        class: 'h-1/2',
      },
      {
        position: ['top', 'bottom'],
        size: 'xl',
        class: 'h-5/6',
      },
      {
        position: ['top', 'bottom'],
        size: 'full',
        class: 'h-screen',
      },
      {
        position: ['right', 'left'],
        size: 'content',
        class: 'max-w-screen',
      },
      {
        position: ['right', 'left'],
        size: 'default',
        class: 'w-1/3',
      },
      {
        position: ['right', 'left'],
        size: 'sm',
        class: 'w-1/4',
      },
      {
        position: ['right', 'left'],
        size: 'lg',
        class: 'w-1/2',
      },
      {
        position: ['right', 'left'],
        size: 'xl',
        class: 'w-5/6',
      },
      {
        position: ['right', 'left'],
        size: 'full',
        class: 'w-screen',
      },
    ],
    defaultVariants: {
      position: 'right',
      size: 'default',
    },
  }
);
