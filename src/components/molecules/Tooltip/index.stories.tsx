import { Button } from '@/components/atoms/Button';
import { Meta, StoryObj } from '@storybook/react';

import {
  Tooltip,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from '.';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof Tooltip> = {
  id: 'Molecules/Tooltip',
  title: 'Verified/Molecules/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Playground: Story = {
  render: (args) => (
    <TooltipProvider delayDuration={200}>
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </TooltipProvider>
  ),
  parameters: {
    embedDesigns: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
    author: AUTHORS['vadym.melnicenko'],
  },
};
