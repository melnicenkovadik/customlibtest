import { cn, truncateText } from '@/utils';

import { TruncateTextProps, truncateVariants } from './types';

export const TruncateText = ({
  className,
  variant,
  size,
  text,
  start = 4,
  end = 4,
  dots = 3,
  isTruncate = false,
  ...props
}: TruncateTextProps) => {
  const cutText = isTruncate ? truncateText(text, start, end, dots) : text;

  return (
    <div
      className={cn(truncateVariants({ variant, size }), className)}
      {...props}
    >
      {cutText}
    </div>
  );
};
