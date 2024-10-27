import { useEffect, useState } from 'react';
import toast, { useToaster } from 'react-hot-toast';
import { Avatar } from '@/components/atoms/Avatar';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { cn } from '@/utils';
import { X } from 'lucide-react';

import { ToastProps } from './types';

export const Toast = ({
  id,
  className,
  header,
  headerClassName,
  description,
  descriptionClassName,
  avatarSrc,
  suffix,
  onClose,
}: ToastProps) => (
  <div
    className={cn(
      'relative flex flex-row items-center justify-center gap-4 rounded-md border bg-background p-6 shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.10),_0px_4px_6px_-4px_rgba(0,_0,_0,_0.10)]',
      className,
    )}
  >
    {avatarSrc && <Avatar src={avatarSrc} />}
    <div className="flex max-w-[255px] flex-col gap-1">
      <Typography
        size="body2"
        className={cn('font-semibold', headerClassName)}
      >
        {header}
      </Typography>
      <Typography
        size="body2"
        className={cn('font-normal', descriptionClassName)}
      >
        {description}
      </Typography>
    </div>
    {suffix}
    <X
      className="absolute right-2 top-2 h-4 w-4 cursor-pointer"
      onClick={() => {
        toast.remove(id);
        onClose?.();
      }}
    />
  </div>
);

export const Notifications = ({ maxVisible = 3 }: { maxVisible?: number }) => {
  const { toasts, handlers } = useToaster();
  const { startPause, endPause } = handlers;
  const [showAll, setShowAll] = useState(false);
  const [visibleToasts, setVisibleToasts] = useState<typeof toasts>([]);

  useEffect(() => {
    setVisibleToasts(toasts.filter((toast) => toast.visible));
  }, [toasts]);

  useEffect(() => {
    if (!visibleToasts.length && showAll) {
      setShowAll(false);
    }
    // eslint-disable-next-line
  }, [visibleToasts]);

  return (
    <div
      onMouseEnter={startPause}
      onMouseLeave={endPause}
      className="fixed bottom-2 right-2 flex flex-col gap-2"
    >
      {visibleToasts
        .slice(visibleToasts.length - (showAll ? toasts.length : maxVisible))
        .map((toast) => {
          const toastFn = toast.message as (params: {
            id: string;
          }) => React.ReactElement;
          return toastFn({ id: toast.id });
        })}
      {visibleToasts.length > maxVisible && (
        <Button
          variant="link"
          onClick={() => setShowAll(true)}
        >
          View All
        </Button>
      )}
    </div>
  );
};
