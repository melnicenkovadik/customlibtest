import { useState } from 'react';
import { PopoverClose } from '@radix-ui/react-popover';
import { Button, Popover, PopoverContent, PopoverTrigger } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import { Moon, Palette, Sun, X } from 'lucide-react';
import { ThemeSelector } from '.';
import { ModeCodeType } from './types';
import { AUTHORS } from '.storybook/authors';

const modes: { icon: JSX.Element; displayValue: string; code: ModeCodeType }[] =
  [
    { icon: <Sun />, displayValue: 'Light', code: 'light' },
    { icon: <Moon />, displayValue: 'Dark', code: 'dark' },
    { icon: <Palette />, displayValue: 'Auto', code: 'auto' },
  ];

export const accents = [
  {
    color: 'rgb(36, 189, 254)',
    displayValue: 'Blue',
    code: 'accent-blue',
  },
  {
    color: 'rgb(180, 134, 255)',
    displayValue: 'Violet',
    code: 'accent-violet',
  },
  {
    color: 'rgb(235, 118, 118)',
    displayValue: 'Salmon',
    code: 'accent-salmon',
  },
  {
    color: 'rgb(82, 255, 181)',
    displayValue: 'Green',
    code: 'accent-green',
  },
  {
    color: 'rgb(243, 126, 255)',
    displayValue: 'Pink',
    code: 'accent-pink',
  },
  {
    color: 'rgb(238, 142, 53)',
    displayValue: 'Orange',
    code: 'accent-orange',
  },
  {
    color: 'rgb(255, 231, 107)',
    displayValue: 'Yellow',
    code: 'accent-yellow',
  },
];

const meta: Meta<typeof ThemeSelector> = {
  id: 'Molecules/ThemeSelector',
  title: 'Verified/Molecules/ThemeSelector',
  component: ThemeSelector,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
    embedDesigns: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
    designs: [
      'https://www.figma.com/file/AczaSV5JD1751SAWcZshOp/Flamingo-Design-System-(Community)?node-id=53-412',
    ],
  },
  args: {},
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedMode, setSelectedMode] = useState<ModeCodeType>('auto');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedAccent, setSelectedAccent] =
      useState<string>('accent-green');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
      <Popover
        onOpenChange={(v) => setIsOpen(v)}
        open={isOpen}
      >
        <PopoverTrigger asChild>
          <Button variant="outline">Open</Button>
        </PopoverTrigger>
        <PopoverContent
          className="relative top-[-58px] flex h-screen w-screen flex-col border-0 p-6 sm:top-0 sm:h-[514px] sm:w-[400px] sm:border"
          onInteractOutside={(e) => e.preventDefault()}
          align="start"
        >
          <ThemeSelector
            onModeChanged={(modeCode: ModeCodeType) =>
              setSelectedMode(modeCode)
            }
            onAccentChanged={(accentCode: string) =>
              setSelectedAccent(accentCode)
            }
            selectedMode={selectedMode}
            selectedAccent={selectedAccent}
            accents={accents}
            modes={modes}
            title="Customize"
            text="You have 10 unread notifications"
            iconClose={
              <PopoverClose className="absolute -right-2 -top-2">
                <X size={16} />
              </PopoverClose>
            }
          />
        </PopoverContent>
      </Popover>
    );
  },
};
