import { ExpandableImage, ExpandedImage } from '@/components';
import { Meta, StoryObj } from '@storybook/react';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '.';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof Carousel> = {
  id: 'Molecules/Carousel',
  title: 'Verified/Molecules/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
  },
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
    className: 'w-full max-w-xs',
    children: (
      <>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}></CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselDots />
      </>
    ),
  },
};

const items = [
  {
    src: './assets/test_img_card.jpg',
  },
  {
    src: './assets/test_img_card.jpg',
  },
  {
    src: './assets/test_img_card.jpg',
  },
  {
    src: './assets/test_img_card.jpg',
  },
  {
    src: './assets/test_img_card.jpg',
  },
  {
    src: './assets/test_img_card.jpg',
  },
  {
    src: './assets/test_img_card.jpg',
  },
  {
    src: './assets/test_img_card.jpg',
  },
  {
    src: './assets/test_img_card.jpg',
  },
  {
    src: './assets/test_img_card.jpg',
  },
  {
    src: './assets/test_img_card.jpg',
  },
  {
    src: './assets/test_img_card.jpg',
  },
];

export const DaapCarousel: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  args: {
    className: 'carousel-container [&>div]:pb-6 w-full',
    opts: {
      slidesToScroll: 1,
      align: 'start',
    },
    children: (
      <CarouselContent className="carousel-content -ml-2">
        {items.map((_item, index) => (
          <CarouselItem
            key={index}
            className="flex w-full items-center justify-center"
          >
            <ExpandableImage
              className="h-60 w-60"
              src="./assets/test_img_card.jpg"
              content={
                <ExpandedImage
                  imgClassName="h-[800px] w-[800px]"
                  description="Edition II #23"
                  name="The Custom"
                  src="./assets/test_img_card.jpg"
                />
              }
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    ),
  },
};
