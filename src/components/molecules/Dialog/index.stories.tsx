import { Button } from '@/components/atoms/Button';
import { Switch } from '@/components/atoms/Switch';
import { Meta, StoryObj } from '@storybook/react';
import { BellRing } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '.';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof Dialog> = {
  id: 'Molecules/Dialog',
  title: 'Verified/Molecules/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    children: {
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
    children: (
      <>
        <DialogTrigger asChild>
          <Button size="sm">Notifications</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader className="mb-6 sm:mb-0">
            <DialogTitle>Notifications</DialogTitle>
            <DialogDescription>
              Receive incoming transaction and notification alerts.
            </DialogDescription>
          </DialogHeader>

          <div className="flex items-center space-x-4 rounded-md border border-border p-4">
            <BellRing />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Don’t miss a thing!
              </p>
              <p className="text-sm text-muted-text">
                Receive notifications for transactions, products, airdrops etc.
              </p>
            </div>
            <Switch defaultChecked={true} />
          </div>

          <DialogFooter>
            <Button>Continue</Button>
          </DialogFooter>
        </DialogContent>
      </>
    ),
  },
};
