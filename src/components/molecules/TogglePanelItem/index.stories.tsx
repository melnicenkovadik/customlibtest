import { TogglePanelItem } from '@/components/molecules/TogglePanelItem/index';
import type { Meta, StoryObj } from '@storybook/react';
import { BellRing } from 'lucide-react';
import { AUTHORS } from '.storybook/authors';

const item = {
  id: 5,
  icon: <BellRing className="h-6 w-6" />,
  type: 'Push Notifications',
  message: 'Send Notifications to device',
  read: false,
};

const meta: Meta<typeof TogglePanelItem> = {
  id: 'Molecules/TogglePanelItem',
  title: 'Verified/Molecules/TogglePanelItem',
  component: TogglePanelItem,
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
    item,
  },
};
