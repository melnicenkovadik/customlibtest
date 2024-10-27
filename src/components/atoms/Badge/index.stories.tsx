import { cn } from '@/utils';
import type { Meta, StoryObj } from '@storybook/react';
import { User } from 'lucide-react';

import { Badge } from '.';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof Badge> = {
  id: 'Atoms/Badge',
  title: 'Verified/Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'destructive', 'outline', 'number'],
      control: { type: 'select' },
    },
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
    children: 'Badge',
  },
};

export const Variants = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  args: {
    children: (
      <>
        <User className="h-3 w-3" /> Badge
      </>
    ),
  },
  argTypes: {
    children: { control: false },
    variant: { control: false },
  },
  render: (args: any) => (
    <div className="flex flex-wrap items-center gap-4">
      <Badge
        {...args}
        variant="default"
      />
      <Badge
        {...args}
        variant="secondary"
      />
      <Badge
        {...args}
        variant="tertiary"
      />
      <Badge
        {...args}
        variant="outline"
      />
      <Badge
        {...args}
        variant="destructive"
      />
      <Badge
        {...args}
        variant="num"
      />
    </div>
  ),
};

export const MoodRelated = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  args: {
    value: 0,
  },
  argTypes: {
    variant: { control: false },
  },
  render: ({ value }: { value: number }) => {
    let badgeVariant;
    let sign = '';

    if (value < 0) {
      badgeVariant = 'bg-error-100 hover:bg-error-100 text-error-600';
      sign = '-';
    } else if (value > 0) {
      badgeVariant = 'bg-success-100 hover:bg-success-100 text-success-600';
      sign = '+';
    } else {
      badgeVariant = 'bg-neutral-100 hover:bg-neutral-100 text-neutral-500';
    }

    return (
      <div className="flex items-center gap-4">
        <Badge className={cn(badgeVariant, 'cursor-default rounded px-2')}>
          {sign}
          {Number(Math.abs(value)).toLocaleString()}%
        </Badge>
      </div>
    );
  },
};
