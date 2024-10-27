import React, { forwardRef, useId } from 'react';
import { Indicator, Root } from '@radix-ui/react-checkbox';
import { cn } from '@/utils';
import { Square, SquareCheckBig } from 'lucide-react';

import { CheckboxProps } from './types';

export const Checkbox = forwardRef<
  React.ElementRef<typeof Root>,
  CheckboxProps
>(
  (
    { className, inputClassName, labelClassName, label, details, ...props },
    ref,
  ) => {
    const id = useId();

    return (
      <div className={cn('flex', className)}>
        <Root
          ref={ref}
          className={cn(
            'peer h-4 w-4 shrink-0 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            inputClassName,
          )}
          id={id}
          {...props}
        >
          {!props.checked && <Square className="h-4 w-4 translate-y-0.5" />}
          <Indicator className={cn('flex items-center justify-center')}>
            {props.checked && (
              <SquareCheckBig className="h-4 w-4 translate-y-0.5" />
            )}
          </Indicator>
        </Root>
        <label
          htmlFor={id}
          className={cn('ml-2 cursor-pointer text-sm', labelClassName)}
        >
          {label}
          {details && <p className="mt-2 text-secondary-text">{details}</p>}
        </label>
      </div>
    );
  },
);
