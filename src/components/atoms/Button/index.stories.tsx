import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { Plus } from 'lucide-react';

import { Button } from '.';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof Button> = {
  id: 'Atoms/Button',
  title: 'Verified/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'outline',
        'ghost',
        'link',
        'destructive',
        'outline-primary',
      ],
      control: { type: 'select' },
    },
    size: {
      options: ['default', 'sm', 'lg', 'clear'],
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
    variant: 'primary',
    children: 'Button',
    onClick: action('on-click'),
    size: 'default',
    disabled: false,
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
    size: 'default',
    children: (
      <>
        <Plus className="h-4 w-4" />
        Button
        <Plus className="h-4 w-4" />
      </>
    ),
    disabled: false,
  },
  argTypes: {
    children: { control: false },
    variant: { control: false },
  },
  render: (
    args: {
      size: string;
      variant: string;
      children: string;
      disabled: boolean;
    }[],
  ) => (
    <div className="flex flex-wrap gap-4">
      <Button
        {...args}
        variant="primary"
      />
      <Button
        {...args}
        variant="secondary"
      />
      <Button
        {...args}
        variant="tertiary"
      />
      <Button
        {...args}
        variant="outline"
      />
      <Button
        {...args}
        variant="ghost"
      />
      <Button
        {...args}
        variant="link"
      />
      <Button
        {...args}
        variant="destructive"
      />
      <Button
        {...args}
        variant="outline-primary"
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
    children: 'Button',
    variant: 'primary',
  },
  argTypes: {
    size: { control: false },
  },
  render: (args: any) => (
    <div className="flex gap-4">
      <Button
        {...args}
        size="sm"
      />
      <Button
        {...args}
        size="default"
      />
      <Button
        {...args}
        size="lg"
      />
    </div>
  ),
};
