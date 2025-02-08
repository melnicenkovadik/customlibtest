import { Button } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import { Tagline } from '.';
import { AUTHORS } from '.storybook/authors';
import { BADGE } from '.storybook/constants';

const meta: Meta<typeof Tagline> = {
  id: 'Atoms/Tagline',
  title: 'Verified/Atoms/Tagline',
  component: Tagline,
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
    embedDesigns: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  args: {
    text: 'Your current spendable balance 200 USDC is low',
    button: (
      <Button
        size="sm"
        variant="secondary"
      >
        Add funds
      </Button>
    ),
    size: 'full',
  },
  argTypes: {
    button: {
      control: false,
    },
    icon: {
      control: false,
    },
    size: {
      options: ['default', 'full'],
      control: { type: 'select' },
    },
  },
  render: (args) => (
    <Tagline
      {...args}
      className="bg-accent-active"
    />
  ),
};
