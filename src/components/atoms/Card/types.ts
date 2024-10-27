import { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

export const cardVariants = cva('bg-background', {
  variants: {
    size: {
      default: 'p-6',
      md: 'p-4',
      sm: 'p-3',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export interface CardWrapperProps extends HTMLAttributes<HTMLDivElement> {
  isHovered?: boolean;
}

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  isBackground?: boolean;
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  isCol?: boolean;
}
