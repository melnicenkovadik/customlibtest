import { ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export const taglineVariants = cva(
  'flex min-h-9 items-center justify-between rounded bg-warning-50',
  {
    variants: {
      size: {
        default: 'px-2 py-1',
        full: 'w-full p-3',
      },
    },
  },
);

export interface TaglineProps extends VariantProps<typeof taglineVariants> {
  text: string | ReactNode;
  icon?: React.ReactNode;
  button?: React.ReactNode;
  className?: string;
}
