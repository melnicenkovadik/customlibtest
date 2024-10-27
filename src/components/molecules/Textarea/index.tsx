import { forwardRef, useId } from 'react';
import { Label } from '@radix-ui/react-label';
import { cn } from '@/utils';
import { TriangleAlert } from 'lucide-react';

import { TextareaProps, textAreaVariants } from './types';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, isErrors, error, variant, label, disabled, icon, ...props },
    ref,
  ) => {
    const id = useId();

    return (
      <div className="grid w-full gap-1.5">
        {label && (
          <Label
            htmlFor={id}
            className={cn('text-sm', disabled ? 'text-muted-text' : '')}
          >
            {label}
          </Label>
        )}
        <div className="relative">
          {icon}
          <textarea
            className={cn(
              textAreaVariants({ variant }),
              isErrors || error
                ? 'text-destructive outline outline-2 outline-offset-1'
                : '',
              className,
            )}
            ref={ref}
            disabled={disabled}
            id={id}
            {...props}
          />
          {isErrors && (
            <TriangleAlert className="absolute right-3 top-2 text-red-500" />
          )}
        </div>
      </div>
    );
  },
);
