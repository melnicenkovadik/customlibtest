import React, { forwardRef } from 'react';
import { Root, Thumb } from '@radix-ui/react-switch';
import { cn } from '@/utils';

import { SwitchProps, switchThumbVariant, switchVariants } from './types';

export const Switch = forwardRef<React.ElementRef<typeof Root>, SwitchProps>(
  (
    { className, classNameThumb, size, checked, onCheckedChange, ...props },
    ref,
  ) => {
    return (
      <Root
        className={cn(switchVariants({ size }), className)}
        checked={checked}
        onCheckedChange={onCheckedChange}
        {...props}
        ref={ref}
      >
        <Thumb className={cn(switchThumbVariant({ size }), classNameThumb)} />
      </Root>
    );
  },
);
