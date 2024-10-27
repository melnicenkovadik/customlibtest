import { ImageModal } from '@/components/molecules/ExpandableImage/ImageModal';
import type { Meta, StoryObj } from '@storybook/react';

import { ExpandedImage } from '.';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof ExpandedImage> = {
  id: 'Molecules/ExpandedImage',
  title: 'Verified/Molecules/ExpandedImage',
  component: ExpandedImage,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'
    ],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  argTypes: {},
  render: () => {
    return (
      <ImageModal>
        <ExpandedImage
          imgClassName="w-[544px] h-auto"
          src="./assets/test_img_card.jpg"
          name="Custom"
          description="Edition II #23"
        />
      </ImageModal>
    );
  },
};
