import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/molecules/Carousel';
import { ImageModal } from '@/components/molecules/ExpandableImage/ImageModal';
import { ExpandedImage } from '@/components/molecules/ExpandedImage';
import type { Meta, StoryObj } from '@storybook/react';
import { ExpandableImage } from '.';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof ExpandableImage> = {
  id: 'Molecules/ExpandableImage',
  title: 'Verified/Molecules/ExpandableImage',
  component: ExpandableImage,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  args: {
    className: 'w-[236px] h-[236px]',
    src: './assets/test_img_card.jpg',
    content: (
      <ExpandedImage
        description="Edition II #23"
        name="The Custom"
        src="./assets/test_img_card.jpg"
      />
    ),
  },
  argTypes: {},
};

export const ImageCarousel: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
  },
  args: {
    className: 'w-[236px] h-[236px]',
    src: './assets/test_img_card.jpg',
    content: (
      <Carousel className="m-auto h-[544px] w-[544px]">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <ImageModal>
                <ExpandedImage
                  imgClassName="w-[544px] h-[544px]"
                  description="Edition II #23"
                  name="The Custom"
                  src="./assets/test_img_card.jpg"
                />
              </ImageModal>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hover: border-border" />
        <CarouselNext className="border-border" />
      </Carousel>
    ),
  },
};
