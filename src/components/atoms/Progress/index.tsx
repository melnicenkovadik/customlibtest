import React, { forwardRef } from 'react';
import { Indicator, Root } from '@radix-ui/react-progress';
import { cn } from '@/utils';

import { indicatorVariants, ProgressProps, progressVariants } from './types';

export const Progress = forwardRef<
  React.ElementRef<typeof Root>,
  ProgressProps
>(
  (
    { className, indicatorClassName, variant = 'default', value, ...props },
    ref,
  ) => (
    <Root
      ref={ref}
      className={cn(progressVariants({ variant }), className)}
      {...props}
    >
      <Indicator
        className={cn(indicatorVariants({ variant }), indicatorClassName)}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </Root>
  ),
);
