import { ReactNode } from 'react';
import { Typography } from '@/components/atoms';
import { TruncateText } from '@/components/atoms/TruncateText';
import { cn } from '@/utils';

import { TextWithActionsProps } from './types';

export const TextWithActions = ({
  className = 'gap-[9px]',
  textClasses,
  text,
  title,
  actions,
  startTruncate = 4,
  variant = 'body1',
  isTruncate,
  ...props
}: TextWithActionsProps) => {
  if (!title && !text) {
    throw new Error('title and text props can not be empty at the same time');
  }

  return (
    <div className={cn('flex items-center', className)}>
      {title && <Typography size={variant}>{title}</Typography>}
      {text && (
        <TruncateText
          text={text}
          {...props}
          className={cn(textClasses, 'gap-1')}
          isTruncate={isTruncate}
          start={startTruncate}
        />
      )}

      {actions.length > 0 && actions.map((action: ReactNode) => action)}
    </div>
  );
};
