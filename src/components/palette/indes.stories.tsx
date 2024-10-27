import type { Meta, StoryObj } from '@storybook/react';

import { Palette } from '.';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof Palette> = {
  id: 'Demo/Palette',
  title: 'Demo/Palette',
  component: Palette,
  argTypes: {},
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
};
