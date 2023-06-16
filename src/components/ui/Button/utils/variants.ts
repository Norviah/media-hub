import { cva } from 'class-variance-authority';

export const variants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background transition-colors',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/70 active:bg-primary/50 shadow-md shadow-primary/30 transition-shadow hover:shadow-lg hover:shadow-primary/50',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/70 shadow-md shadow-destructive/30 transition-shadow hover:shadow-lg hover:shadow-destructive/50',
        outline:
          'border border-input hover:bg-accent hover:text-accent-foreground active:bg-accent/70',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/60 shadow-md shadow-secondary/30 transition-shadow hover:shadow-lg hover:shadow-secondary/50',
        success:
          'bg-success text-success-foreground hover:bg-success/80 active:bg-success/60 shadow-md shadow-success/30 transition-shadow hover:shadow-lg hover:shadow-success/50',
        warn: 'bg-warn text-warn-foreground hover:bg-warn/80 active:bg-warn/60 shadow-md shadow-warn/30 transition-shadow hover:shadow-lg hover:shadow-warn/50',
        ghost: 'hover:bg-accent hover:text-accent-foreground active:bg-accent/70',
        link: 'underline-offset-4 hover:underline text-primary',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
