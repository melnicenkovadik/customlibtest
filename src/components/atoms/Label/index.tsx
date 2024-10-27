import React, { forwardRef } from 'react';
import { Root } from '@radix-ui/react-label';
import { cn } from '@/utils';

export const Label = forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      'text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className,
    )}
    {...props}
  />
));
