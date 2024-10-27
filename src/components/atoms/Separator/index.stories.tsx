import { Meta, StoryObj } from '@storybook/react';

import { Separator } from '.';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof Separator> = {
  id: 'Atoms/Separator',
  title: 'Verified/Atoms/Separator',
  component: Separator,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    orientation: 'horizontal',
  },
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  render: (args) => (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-text">
          An open-source UI component library.
        </p>
      </div>
      <Separator
        className="my-4"
        {...args}
      />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};
