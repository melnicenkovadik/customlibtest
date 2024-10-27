import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '.';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof Avatar> = {
  id: 'Atoms/Avatar',
  title: 'Verified/Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: './assets/avatar.jpg',
    status: 'online',
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
  argTypes: {
    avatarComponent: {
      options: ['default', 'success', 'secondary'],
      control: false,
    },
    src: {
      options: [
        './assets/avatar.jpg',
        './assets/avatar2.jpg',
        './assets/avatar3.jpg',
        './assets/avatar4.jpg',
        './assets/test_img.jpg',
      ],
      control: { type: 'select' },
    },
    status: {
      options: ['online', 'offline', undefined],
      control: { type: 'select' },
    },
  },
};
