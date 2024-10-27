import { Badge } from '@/components/atoms/Badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/molecules/Tooltip';
import type { Meta, StoryObj } from '@storybook/react';
import { Mail } from 'lucide-react';

import { MenuItem } from '.';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof MenuItem> = {
  id: 'Molecules/MenuItem',
  title: 'Verified/Molecules/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'
    ],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  args: {},
  render: () => {
    return (
      <ul>
        <MenuItem>
          <Mail size={16} /> Menu Item
        </MenuItem>
        <MenuItem disabled={true}>
          <Mail size={16} /> Menu Item
        </MenuItem>
        <MenuItem className="pl-8">Menu Item</MenuItem>
        <MenuItem
          className="pl-8"
          disabled={true}
        >
          Menu Item
        </MenuItem>
        <MenuItem className="w-fit">
          <Mail size={16} />
        </MenuItem>
        <MenuItem
          className="w-fit"
          disabled={true}
        >
          <Mail size={16} />
        </MenuItem>
        <MenuItem className="w-fit">
          <Mail size={16} />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Badge
                  variant="secondary"
                  className="border-0"
                >
                  Tooltip
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </MenuItem>
      </ul>
    );
  },
};
