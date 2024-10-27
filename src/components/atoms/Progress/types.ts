import { Root } from '@radix-ui/react-progress';
import { cva } from 'class-variance-authority';

export const progressVariants = cva(
  'relative overflow-hidden rounded-full transition-all',
  {
    variants: {
      variant: {
        default: 'h-4 w-full bg-secondary',
        trending: 'h-2 w-full bg-red-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export const indicatorVariants = cva(
  'h-full w-full flex-1 rounded-full transition-all',
  {
    variants: {
      variant: {
        default: 'bg-foreground',
        trending: 'bg-green-500',
      },
    },
  },
);

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof Root> {
  variant?: 'default' | 'trending';
  indicatorClassName?: string;
}
