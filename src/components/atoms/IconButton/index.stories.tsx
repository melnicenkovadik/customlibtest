import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Plus } from 'lucide-react';
import { IconButton } from '.';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof IconButton> = {
  id: 'Atoms/IconButton',
  title: 'Verified/Atoms/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: false,
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
    disabled: false,
    text: 'button name',
    paint: 'brand-filled',
    version: 'outlined',
    size: 'sm',
    shape: 'circle',
    className: '',
    variant: 'default',
    icon: <Plus className="h-4 w-4" />,
    onClick: action('on-click'),
  },
  argTypes: {
    paint: {
      options: ['neutral', 'brand', 'brand-filled', 'neutral-filled'],
      control: { type: 'select' },
    },
    size: {
      options: ['x-sm', 'sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    shape: {
      options: ['circle', 'square'],
      control: { type: 'select' },
    },
    version: {
      options: ['outlined', 'ghost'],
      control: { type: 'select' },
    },
    variant: {
      options: [
        null,
        'default',
        'outline-primary',
        'ghost-neutral',
        'outline',
        'tertiary',
        'ghost-brand',
        'inherit',
      ],
      control: { type: 'select' },
    },
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
    variant: 'default',
    icon: <Plus className="h-3 w-3" />,
    onClick: action('on-click'),
  },
  render: (
    args: {
      size: 'default' | 'sm' | 'lg' | 'clear';
      variant: string;
      children: string;
    }[],
  ) => (
    <div className="flex gap-4">
      <IconButton
        {...args}
        paint="brand-filled"
        icon={<Plus className="h-4 w-4" />}
      />
      <IconButton
        {...args}
        paint="brand"
        icon={<Plus className="h-4 w-4" />}
      />
      <IconButton
        {...args}
        paint="neutral"
        icon={<Plus className="h-4 w-4" />}
      />
      <IconButton
        {...args}
        paint="neutral-filled"
        icon={<Plus className="h-4 w-4" />}
      />
      <IconButton
        {...args}
        paint="brand"
        version="ghost"
        icon={<Plus className="h-4 w-4" />}
      />
      <IconButton
        {...args}
        paint="neutral"
        version="ghost"
        icon={<Plus className="h-4 w-4" />}
      />
    </div>
  ),
};

export const Sizes = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  args: {
    variant: 'default',
    icon: <Plus className="h-3 w-3" />,
    onClick: action('on-click'),
  },
  render: (
    args: {
      size: string;
      variant: 'default';
      icon: React.ReactNode;
    }[],
  ) => (
    <div className="flex items-center gap-4">
      <IconButton
        {...args}
        size="x-sm"
      />
      <IconButton
        {...args}
        size="sm"
      />
      <IconButton
        {...args}
        size="md"
      />
      <IconButton
        {...args}
        size="lg"
      />
      <IconButton
        {...args}
        size="x-sm"
        shape="square"
        className="rounded"
      />
      <IconButton
        {...args}
        size="sm"
        shape="square"
      />
      <IconButton
        {...args}
        size="md"
        shape="square"
      />
      <IconButton
        {...args}
        size="lg"
        shape="square"
      />
    </div>
  ),
};
