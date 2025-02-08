import type { Meta, StoryObj } from '@storybook/react';
import { CopyButton } from '.';
import { AUTHORS } from '.storybook/authors';
import { BADGE } from '.storybook/constants';

const meta: Meta<typeof CopyButton> = {
  id: 'Atoms/CopyButton',
  title: 'Verified/Atoms/CopyButton',
  component: CopyButton,
  tags: ['autodocs'],
  parameters: {
    badges: [BADGE.CUSTOM],
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
  },
  args: {
    value: 'sample',
  },
};
