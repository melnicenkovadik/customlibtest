import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '.';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof Progress> = {
  id: 'Atoms/Progress',
  title: 'Verified/Atoms/Progress',
  component: Progress,
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
    value: 77,
  },
  render: (args) => (
    <div className="h-7 w-40">
      <Progress {...args} />
    </div>
  ),
};

export const TrendingTradesRatio: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
  },
  args: {
    value: 62,
    variant: 'trending',
  },
  render: (args) => (
    <div className="h-7 w-60">
      <Progress
        {...args}
        indicatorClassName="rounded-none"
      />
    </div>
  ),
};
