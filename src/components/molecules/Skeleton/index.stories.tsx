import { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from '.';
import { AUTHORS } from '.storybook/authors';
import { BADGE } from '.storybook/constants';

const meta: Meta<typeof Skeleton> = {
  id: 'Molecules/Skeleton',
  title: 'Verified/Molecules/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    badges: [BADGE.CUSTOM],
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Playground: Story = {
  render: (args) => (
    <div className="flex items-center space-x-4">
      <Skeleton
        className="h-12 w-12 rounded-full"
        {...args}
      />
      <div className="space-y-2">
        <Skeleton
          className="h-4 w-[250px]"
          {...args}
        />
        <Skeleton
          className="h-4 w-[200px]"
          {...args}
        />
      </div>
    </div>
  ),
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
  },
};
