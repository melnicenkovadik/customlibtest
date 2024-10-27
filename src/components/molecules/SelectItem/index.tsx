import { Avatar, Badge, TruncateText } from '@/components';
import { CopyButton } from '@/components/atoms/CopyButton';
import { Typography } from '@/components/atoms/Typography';
import {
  OptionType,
  TokenItemType,
} from '@/components/molecules/SelectItem/types';

export const SelectItem = ({
  option: { value, label, type },
}: {
  option: OptionType;
}) => {
  return (
    <div className="flex h-[56px] w-full cursor-pointer items-center justify-between gap-2">
      <div className="flex-1">
        <Typography
          tag="h6"
          size="body2"
          className="font-medium"
        >
          {label}
        </Typography>
        <div className="flex gap-2">
          <TruncateText
            text={value}
            isTruncate
            start={9}
            className="font-normal text-secondary-text"
          />
          <CopyButton
            value={value}
            className="text-secondary-text hover:text-primary-hover"
          />
        </div>
      </div>
      <Badge
        variant="secondary"
        className="h-[22px] text-xs text-foreground"
      >
        {type}
      </Badge>
    </div>
  );
};

export const SelectTokenItem = ({ avatar, label, onClick }: TokenItemType) => {
  return (
    <div
      className="hover:bg-secondary-light flex h-6 cursor-pointer items-center gap-2"
      onClick={onClick}
    >
      <div className="h-4 w-4 rounded-full">
        <Avatar
          src={avatar}
          className="h-4 w-4"
        />
      </div>
      <div>
        <Typography
          tag="h4"
          size="body2"
          className="font-normal"
        >
          {label}
        </Typography>
      </div>
    </div>
  );
};
