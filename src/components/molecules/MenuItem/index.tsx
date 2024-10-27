import { cn } from '@/utils';

import { MenuItemProps } from './types';

export const MenuItem = ({
  disabled = false,
  className,
  ...props
}: MenuItemProps) => {
  return (
    <li
      tabIndex={disabled ? -1 : 0}
      className={cn(
        'flex items-center gap-x-2 rounded p-2 text-sm outline-none',
        disabled
          ? 'opacity-50'
          : 'cursor-pointer hover:bg-secondary focus:bg-secondary',
        className,
      )}
      {...props}
    />
  );
};
