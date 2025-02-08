import { useState } from 'react';
import { Button, IconButton } from '@/components';
import { Sidebar } from '@/components/molecules/Sidebar/index';
import { TooltipProvider } from '@/components/molecules/Tooltip';
import { cn } from '@/utils';
import { Meta, StoryObj } from '@storybook/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AUTHORS } from '.storybook/authors';
import { BADGE } from '.storybook/constants';

const TOOLTIP_DELAY_DURATION = 0;

const contentClass =
  'flex ease-linear overflow-hidden duration-300 sticky inset-y-0 left-0 z-10 p-2 flex-col border-r bg-background border-border';

const meta: Meta<typeof Sidebar> = {
  id: 'Molecules/Sidebar',
  title: 'Verified/Molecules/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    badges: [BADGE.CUSTOM],
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

//TODO: tooltip provider? Whaaat?
export const Playground: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
  },
  args: {},
  argTypes: {
    contentCollapsed: { control: false },
    contentOpen: { control: false },
    className: { control: false },
    isCollapsed: { control: false },
    toggleSidebar: { control: false },
    trigger: { control: false },
  },
  render: (args) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const handleToggleSidebar = () => {
      setIsSidebarCollapsed((prevState) => !prevState);
    };

    const contentOpen = (
      <div className={cn(contentClass, 'w-[262px]')}>
        <Button
          size="sm"
          className="w-full"
        >
          <div className="flex items-center gap-2">
            ICON
            <span>Text</span>
          </div>
        </Button>
      </div>
    );
    const contentCollapsed = (
      <div className={cn(contentClass, 'w-[100px]')}>ICON</div>
    );
    return (
      <TooltipProvider delayDuration={TOOLTIP_DELAY_DURATION}>
        <div className="flex justify-start">
          <Sidebar
            isCollapsed={args.isCollapsed || isSidebarCollapsed}
            toggleSidebar={handleToggleSidebar}
            contentOpen={contentOpen}
            contentCollapsed={contentCollapsed}
            trigger={
              <IconButton
                {...args}
                paint="brand"
                size="x-sm"
                shape="square"
                className="absolute -right-2 top-[5px] z-20 hidden rounded sm:flex"
                icon={isSidebarCollapsed ? <ArrowRight /> : <ArrowLeft />}
              />
            }
          />
        </div>
      </TooltipProvider>
    );
  },
};
