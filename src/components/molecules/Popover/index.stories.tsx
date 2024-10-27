import { Typography } from '@/components/atoms';
import { Button } from '@/components/atoms/Button';
import { Label } from '@/components/atoms/Label';
import { Input } from '@/components/molecules/Input';
import { Meta, StoryObj } from '@storybook/react';

import { Popover, PopoverContent, PopoverTrigger } from '.';
import { AUTHORS } from '.storybook/authors';
import { BADGE } from '.storybook/constants';

const meta: Meta<typeof Popover> = {
  id: 'Molecules/Popover',
  title: 'Verified/Molecules/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    badges: [BADGE.CUSTOM],
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

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
  args: {},
  render: (args) => {
    return (
      <Popover {...args}>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Typography
                size="heading4"
                tag="h4"
                className="font-medium"
              >
                Dimensions
              </Typography>
              <p className="text-sm text-muted-text">
                Set the dimensions for the layer.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Width</Label>
                <Input
                  id="width"
                  defaultValue="100%"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Max. width</Label>
                <Input
                  id="maxWidth"
                  defaultValue="300px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  defaultValue="25px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxHeight">Max. height</Label>
                <Input
                  id="maxHeight"
                  defaultValue="none"
                  className="col-span-2 h-8"
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
};
