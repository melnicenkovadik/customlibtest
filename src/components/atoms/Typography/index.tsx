import { cn } from '@/utils';
import { highlightHashtags } from '@/utils/helpers';
import { titleVariants, TypographyProps } from './types';

export function Typography({
  size,
  color = 'default',
  tag = 'h6',
  disableHashtagsHighlighting = false,
  className,
  children,
  ...rest
}: TypographyProps) {
  const TitleComponent = tag || 'h6';

  return (
    <TitleComponent
      className={cn(titleVariants({ size: size, color, className }))}
      {...rest}
    >
      {typeof children === 'string' && !disableHashtagsHighlighting
        ? highlightHashtags(children)
        : children}
    </TitleComponent>
  );
}
