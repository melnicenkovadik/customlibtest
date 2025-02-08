import { cn } from '@/utils';
import { TwoRowCellProps } from './types';

export const TwoRowCell = ({
  className,
  beforeText,
  afterText,
  primaryText = '',
  secondaryText = '',
  primaryTextClassName = '',
  secondaryTextClassName = '',
  ...rest
}: TwoRowCellProps) => {
  return (
    <div
      className={cn(
        'relative flex flex-row flex-wrap items-center gap-2 px-4 py-3',
        className,
      )}
      {...rest}
    >
      {beforeText}
      <div className="flex flex-col items-start">
        <span
          className={cn(
            'text-sm font-normal text-primary',
            primaryTextClassName,
          )}
        >
          {primaryText}
        </span>
        <span
          className={cn(
            'text-xs font-medium text-secondary-text',
            secondaryTextClassName,
          )}
        >
          {secondaryText}
        </span>
      </div>
      {afterText}
    </div>
  );
};
