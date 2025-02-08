import { forwardRef } from 'react';
import { Typography } from '@/components/atoms/Typography';
import { cn } from '@/utils';
import { IconButtonProps, iconButtonVariants } from './types';

const Button = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant = 'default',
      paint = 'brand-filled',
      size = 'sm',
      shape = 'circle',
      icon,
      className,
      onClick,
      version = 'outlined',
      disabled = false,
      ...rest
    }: IconButtonProps,
    ref,
  ) => {
    return (
      <button
        type="button"
        ref={ref}
        className={cn(
          iconButtonVariants(
            paint ? { paint, size, shape } : { variant, size, shape },
          ),
          {
            'border border-border':
              paint === 'neutral' && version === 'outlined',
            'border border-ui-accent-500':
              paint === 'brand' && version === 'outlined',
            'pointer-events-none opacity-[0.37]': disabled,
          },
          className,
        )}
        disabled={disabled}
        onClick={onClick}
        {...rest}
      >
        {icon}
      </button>
    );
  },
);

Button.displayName = 'IconInnerButton';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ text, className, disabled = false, ...rest }: IconButtonProps, ref) => {
    if (text) {
      return (
        <div
          className={cn(
            'flex flex-col items-center justify-center gap-1',
            className,
            {
              'pointer-events-none opacity-[0.37]': disabled,
            },
          )}
        >
          <Button
            ref={ref}
            className={className}
            disabled={disabled}
            {...rest}
          />
          <Typography
            size="body3"
            className="text-center font-normal"
          >
            {text}
          </Typography>
        </div>
      );
    }

    return (
      <Button
        ref={ref}
        className={className}
        disabled={disabled}
        {...rest}
      />
    );
  },
);

IconButton.displayName = 'IconButton';
