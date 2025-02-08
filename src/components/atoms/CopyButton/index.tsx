import { useEffect, useState } from 'react';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { cn } from '@/utils';
import { Copy } from 'lucide-react';
import { CopyButtonProps } from './types';

export const CopyButton = ({
  value,
  iconClassName = 'text-muted-text',
  text = 'Copied',
  className,
  ...rest
}: CopyButtonProps) => {
  const [showCopied, setShowCopied] = useState(false);

  // handle "Copied" temporary notification
  useEffect(() => {
    if (!showCopied) return;

    const timeoutId = setTimeout(() => setShowCopied(false), 300);

    return () => clearTimeout(timeoutId);
  }, [showCopied]);

  const handleCopyAddress = () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value);
      setShowCopied(true);
    }
  };

  return (
    <Button
      onClick={handleCopyAddress}
      variant="ghost"
      className={cn('relative h-4 w-4 p-0', className)}
      {...rest}
    >
      {showCopied && <Badge className="absolute -top-6 text-xs">{text}</Badge>}
      <Copy
        size={16}
        className={iconClassName}
      />
    </Button>
  );
};
