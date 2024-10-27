import type { Meta, StoryObj } from '@storybook/react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '.';
import { AUTHORS } from '.storybook/authors';
import { BADGE } from '.storybook/constants';

const meta: Meta<typeof Sheet> = {
  id: 'Molecules/Sheet',
  title: 'Verified/Molecules/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  parameters: {
    badges: [BADGE.CUSTOM],
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: (
      <>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <SheetDescription>Ok</SheetDescription>
          </SheetFooter>
        </SheetContent>
      </>
    ),
  },
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
  },
};
