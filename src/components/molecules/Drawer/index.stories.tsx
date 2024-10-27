import { useState } from 'react';
import { Badge, Button, Separator } from '@/components';
import { Typography } from '@/components/atoms/Typography';
import type { Meta, StoryObj } from '@storybook/react';
import { X } from 'lucide-react';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '.';
import { AUTHORS } from '.storybook/authors';
import { BADGE } from '.storybook/constants';

const listOfAssets = [
  {
    text: 'Text',
    value: '9900.00',
  },
  {
    text: 'Text 1',
    value: '99.00',
  },
  {
    text: 'Text 2',
    value: '990.00',
  },
  {
    text: 'Text 3',
    value: '25.00',
  },
];

const listOfAssets2 = [
  {
    text: 'Additional Text',
    value: '100500',
  },
  {
    text: 'Additional Text 1',
    value: '234 M',
  },
  {
    text: 'Additional Text 2',
    value: '4 M',
  },
];

function WalletDrawerStory() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer
      open={isOpen}
      onOpenChange={setIsOpen}
      direction="left"
      modal={false}
    >
      <DrawerTrigger>
        <div>Open</div>
      </DrawerTrigger>
      <DrawerContent className="max-md:max-w-[320px]">
        <DrawerHeader className="flex h-full flex-col">
          <DrawerClose>
            <X className="h-4 w-4" />
          </DrawerClose>
          <div className="flex flex-col justify-center">
            <Typography
              tag="h2"
              size="body2"
              className="mb-7 flex items-center justify-center"
            >
              Drawer Content
            </Typography>
            <Typography
              tag="h3"
              size="body2"
              className="mb-4 text-center"
            >
              Text
            </Typography>
          </div>
          <div className="mb-3 flex flex-col justify-center [&>button]:mb-2">
            <Button variant="primary">Example Text</Button>
            <Button variant="tertiary">Example More</Button>
          </div>
          <div className="h-full overflow-y-scroll pr-2">
            <div className="mb-1">
              <div className="mb-3 flex align-baseline">
                <Typography
                  tag="h3"
                  size="heading4"
                  className="mr-2 text-center"
                >
                  Text
                </Typography>
                <Badge variant="secondary">Badge</Badge>
              </div>
              <div>
                <p className="mb-4 text-sm">$10,000.00</p>
                <ul className="text-sm text-muted-text">
                  {listOfAssets.map((i) => {
                    return (
                      <li
                        className="mb-2 flex justify-between"
                        key={i.text}
                      >
                        {i.text}
                        <span className="flex items-center text-foreground">
                          {i.value}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <Separator />
            <div className="pt-1">
              <div className="mb-3 flex align-baseline">
                <Typography
                  tag="h3"
                  size="body2"
                  className="mr-2 text-center"
                >
                  Info
                </Typography>
              </div>
              <div>
                <ul className="text-sm text-muted-text">
                  {listOfAssets2.map((i) => {
                    return (
                      <li
                        className="mb-2 flex justify-between"
                        key={i.text}
                      >
                        {i.text}
                        <span className="flex items-center text-foreground">
                          {i.value}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}

const meta: Meta<typeof WalletDrawerStory> = {
  id: 'Molecules/Drawer',
  title: 'Verified/Molecules/Drawer',
  component: WalletDrawerStory,
  tags: ['autodocs'],
  parameters: {
    badges: [BADGE.CUSTOM],
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    embedDesigns: [
      'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412'
    ],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
    author: AUTHORS['vadym.melnicenko'],
  },
};
