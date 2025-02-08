import { IconButton } from '@/components/atoms/IconButton';
import { Typography } from '@/components/atoms/Typography';
import { DialogClose } from '@/components/molecules/Dialog';
import { cn } from '@/utils';
import { Share, X } from 'lucide-react';
import { CustomControllerProps, ExpandedImageProps } from './types';

const renderIconButton = (button: CustomControllerProps, index: number) => {
  const iconButton = (
    <IconButton
      key={button?.id || index}
      icon={button.icon}
      onClick={button.onClick}
      text={button.text}
      disabled={button.disabled}
      size="sm"
      paint="neutral"
      shape="square"
    />
  );

  return button.isDialogClose ? (
    <DialogClose key={button?.id || index}>{iconButton}</DialogClose>
  ) : (
    iconButton
  );
};

export const ExpandedImage = ({
  src,
  className,
  imgClassName,
  name,
  description,
  customControllers,
}: ExpandedImageProps) => {
  return (
    <div
      className={cn(
        `group relative m-auto flex flex-col items-end justify-between overflow-hidden rounded-md`,
        className,
      )}
    >
      <div className="mb-2 flex gap-2">
        {customControllers && customControllers.length > 0 ? (
          customControllers.map((button, index) =>
            renderIconButton(button, index),
          )
        ) : (
          <>
            <IconButton
              size="sm"
              paint="neutral"
              shape="square"
              icon={<Share className="h-4 w-4" />}
            />
            <DialogClose asChild>
              <IconButton
                size="sm"
                paint="neutral"
                shape="square"
                icon={<X className="h-4 w-4" />}
              />
            </DialogClose>
          </>
        )}
      </div>
      <img
        className={cn('rounded-2xl', imgClassName)}
        src={src}
        alt={`${name} | ${description}`}
      />

      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 lg:bottom-6 lg:left-6 lg:right-6">
        <div className="flex-1">
          <Typography
            tag="h6"
            size="body2"
            color="invert"
            className="mb-[6px] font-normal"
          >
            {name}
          </Typography>
          <Typography
            tag="p"
            size="heading4"
            color="invert"
            className="leading-[25px]"
          >
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};
