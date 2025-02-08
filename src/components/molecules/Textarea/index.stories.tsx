import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { SmilePlus } from 'lucide-react';
import { Textarea } from '.';
import { TextareaProps } from './types';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof Textarea> = {
  id: 'Molecules/Textarea',
  title: 'Verified/Molecules/Textarea',
  component: Textarea,
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
    onChange: action('on-change'),
    variant: 'default',
    label: 'Your message',
    placeholder: 'Type your message here',
    className: 'w-[530px]',
    disabled: false,
    icon: (
      <SmilePlus className="absolute right-3 top-3 h-4 w-4 cursor-pointer text-muted-text" />
    ),
  },
  argTypes: {
    variant: {
      options: ['default', 'resizable'],
      control: { type: 'select' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
  render: (args: TextareaProps) => <Textarea {...args} />,
};
