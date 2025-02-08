import { Switch, TruncateText } from '@/components';
import { cn } from '@/utils';
import { TogglePanelItemProps } from './types';

/** @deprecated
 * This component is not verified yet.
 * His usage can be changed in the future.
 */
export const TogglePanelItem = ({
  className,
  item,
  truncateStart = 50,
}: {
  className?: string;
  item: TogglePanelItemProps;
  truncateStart?: number;
}) => {
  const { icon, type, message } = item;

  return (
    <div
      className={cn(
        'flex h-[70px] items-center gap-4 rounded-md border border-border px-4 py-3.5',
        className,
      )}
    >
      {icon}
      <div className="font-medium">
        <p>{type}</p>
        <TruncateText
          text={message}
          isTruncate={true}
          className="text-sm text-muted-text"
          start={truncateStart}
        />
      </div>
      <div className="ml-auto">
        <Switch />
      </div>
    </div>
  );
};
