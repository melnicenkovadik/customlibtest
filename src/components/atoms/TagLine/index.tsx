import { cn } from '@/utils';
import { TaglineProps, taglineVariants } from './types';

export function Tagline({
  className,
  size = 'full',
  text,
  icon,
  button,
  ...props
}: TaglineProps) {
  return (
    <div
      className={cn(taglineVariants({ size }), className, 'text-foreground')}
      {...props}
    >
      {text}
      <div className="ml-2 flex items-center">
        {icon && <span className="ml-2">{icon}</span>}
        {button && <span>{button}</span>}
      </div>
    </div>
  );
}
