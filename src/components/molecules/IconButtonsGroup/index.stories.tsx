import type { Meta, StoryObj } from '@storybook/react';
import { Pen, Trash, UserRound } from 'lucide-react';
import { IconButtonsGroup } from '.';
import { AUTHORS } from '.storybook/authors';
import { BADGE } from '.storybook/constants';

const buttons = [
  {
    id: '01',
    icon: <UserRound className="h-4 w-4" />,
    onClick: () => {},
  },
  {
    id: '01',
    icon: <Pen className="h-4 w-4" />,
    onClick: () => {},
  },
  {
    id: '01',
    icon: <Trash className="h-4 w-4" />,
    onClick: () => {},
  },
];

const meta: Meta<typeof IconButtonsGroup> = {
  id: 'Atoms/IconButtonsGroup',
  title: 'Verified/Atoms/IconButtonsGroup',
  component: IconButtonsGroup,
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
    variant: 'default',
    paint: 'brand-filled',
    buttons,
  },
  argTypes: {
    variant: {
      options: [
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
    paint: {
      options: ['neutral', 'brand', 'brand-filled', 'neutral-filled'],
      control: { type: 'select' },
    },
  },
};
