import { cn } from '@/utils';
import { highlightHashtags } from '@/utils/helpers';

import { titleVariants, TypographyProps } from './types';

export function Typography({
  size,
  variant,
  color = 'default',
  tag = 'h6',
  component,
  disableHashtagsHighlighting = false,
  className,
  children,
  ...rest
}: TypographyProps) {
  const TitleComponent = tag || component || 'h6';

  return (
    <TitleComponent
      className={cn(titleVariants({ size: size || variant, color, className }))}
      {...rest}
    >
      {typeof children === 'string' && !disableHashtagsHighlighting
        ? highlightHashtags(children)
        : children}
    </TitleComponent>
  );
}
