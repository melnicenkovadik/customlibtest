import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '.';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof Label> = {
  id: 'Atoms/Label',
  title: 'Verified/Atoms/Label',
  component: Label,
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
  args: {
    children: 'Label example',
    htmlFor: undefined,
  },
  argTypes: {
    children: {
      control: 'text',
    },
    htmlFor: {
      control: 'text',
    },
  },
};
