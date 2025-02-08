import { IconButton } from '@/components/atoms/IconButton';
import { cn } from '@/utils';
import { IconButtonsGroupProps } from './types';

export const IconButtonsGroup = ({
  buttons,
  className,
  variant = 'default',
  size = 'lg',
  paint = 'brand-filled',
  shape = 'circle',
  version = 'outlined',
  iconClassName,
}: IconButtonsGroupProps) => {
  return (
    <div className={cn(`flex gap-3`, className)}>
      {buttons.map((button, index) => (
        <IconButton
          key={index}
          icon={button.icon}
          onClick={button.onClick}
          text={button.text}
          variant={variant}
          paint={paint}
          version={version}
          shape={shape}
          className={iconClassName}
          size={size}
          disabled={button.disabled}
        />
      ))}
    </div>
  );
};
