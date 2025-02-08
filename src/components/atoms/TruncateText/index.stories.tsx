import type { Meta, StoryObj } from '@storybook/react';
import { TruncateText } from '.';
import { AUTHORS } from '.storybook/authors';
import { BADGE } from '.storybook/constants';

const meta: Meta<typeof TruncateText> = {
  id: 'Atoms/TruncateText',
  title: 'Verified/Atoms/TruncateText',
  component: TruncateText,
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
    variant: 'default',
    size: 'default',
    className: 'w-[80px]',
    text: '0xc74988386A9D7b6847e1e75Ede123D8eB1191cCf',
  },
  argTypes: {
    variant: {
      options: ['default', 'no-truncate', 'full'],
      control: { type: 'select' },
    },
    size: {
      options: ['default', 'md', 'xs'],
      control: { type: 'select' },
    },
  },
};

export const TruncateTextStory = {
  args: {
    size: 'default',
    variant: 'theme-primary',
    children: 'Button',
  },
  parameters: {
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  render: () => (
    <div className="flex gap-4">
      <TruncateText
        text="0xc74988386A9D7b6847e1e75Ede123D8eB1191cCf"
        isTruncate={true}
        className="font-medium"
      />
    </div>
  ),
};
