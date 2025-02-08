import { IconButton } from '@/components/atoms/IconButton';
import {
  ImageModal,
  ImageModalContent,
  ImageModalTrigger,
} from '@/components/molecules/ExpandableImage/ImageModal';
import { cn } from '@/utils';
import { Expand, Heart, Share2 } from 'lucide-react';
import { ExpandableImageProps } from './types';

export const ExpandableImage = ({
  src,
  alt = 'Image',
  onErrorLoading,
  content,
  className,
}: ExpandableImageProps) => {
  return (
    <ImageModal>
      <div
        className={cn(
          `group relative flex flex-col items-center justify-center overflow-hidden rounded-md`,
          className,
        )}
      >
        <img
          className="absolute left-0 top-0 h-full w-full"
          loading="lazy"
          src={src}
          alt={alt}
          onError={onErrorLoading}
        />
        <ImageModalTrigger asChild>
          <div className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-50 group-hover:bg-primary" />
        </ImageModalTrigger>
        <div className="absolute right-2 top-2 flex gap-1">
          <ImageModalTrigger asChild>
            <IconButton
              size="sm"
              shape="square"
              paint="neutral"
              icon={<Expand className="h-4 w-4" />}
              className="opacity-0 transition-opacity group-hover:opacity-100"
            />
          </ImageModalTrigger>
        </div>
        <ImageModalContent className="shadow-none">{content}</ImageModalContent>
        <div className="absolute bottom-2 left-2 flex gap-1">
          <IconButton
            size="sm"
            shape="square"
            paint="neutral"
            icon={<Heart className="h-4 w-4" />}
          />
          <IconButton
            size="sm"
            shape="square"
            paint="neutral"
            icon={<Share2 className="h-4 w-4" />}
          />
        </div>
      </div>
    </ImageModal>
  );
};
