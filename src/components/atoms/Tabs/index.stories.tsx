import {
  Button,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/atoms';
import { Typography } from '@/components/atoms/Typography';
import { Meta, StoryObj } from '@storybook/react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '.';
import { AUTHORS } from '.storybook/authors';

const meta: Meta<typeof Tabs> = {
  id: 'Atoms/Tabs',
  title: 'Verified/Atoms/Tabs',
  component: Tabs,
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
  },
  render: () => (
    <Tabs
      defaultValue="account"
      className="w-[600px]"
      variant="default"
    >
      <TabsList className="w-full">
        <TabsTrigger value="account">Selected</TabsTrigger>
        <TabsTrigger value="password">Unselected</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <>
          <CardHeader className="mb-4">
            <Typography
              tag="h2"
              size="heading2"
            >
              Selected
            </Typography>
          </CardHeader>
          <CardContent>
            <>
              <ul className="mb-12 ml-[15px] list-disc">
                <li>Tokens Selected</li>
                <li>Rewards</li>
              </ul>
              <div className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
              </div>
            </>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto px-10">Learn More</Button>
          </CardFooter>
        </>
      </TabsContent>
      <TabsContent value="password">
        <>
          <CardHeader className="mb-4">
            <Typography
              tag="h2"
              size="heading2"
            >
              Unselected
            </Typography>
          </CardHeader>
          <CardContent>
            <>
              <ul className="mb-12 ml-[15px] list-disc">
                <li>Tokens Unselected</li>
                <li>Rewards</li>
              </ul>
              <div className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
              </div>
            </>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto px-10">Learn More</Button>
          </CardFooter>
        </>
      </TabsContent>
    </Tabs>
  ),
};

export const Secondary: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
  },
  render: () => (
    <Tabs
      defaultValue="account"
      className="w-[500px]"
      variant="secondary"
    >
      <TabsList className="w-full">
        <TabsTrigger value="account">Selected</TabsTrigger>
        <TabsTrigger value="password">Unselected</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <>
          <CardHeader className="mb-4">
            <Typography
              tag="h2"
              size="heading2"
            >
              Selected
            </Typography>
          </CardHeader>
          <CardContent>
            <>
              <ul className="mb-12 ml-[15px] list-disc">
                <li>Tokens Selected</li>
                <li>Rewards</li>
              </ul>
              <div className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
              </div>
            </>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto px-10">Learn More</Button>
          </CardFooter>
        </>
      </TabsContent>
      <TabsContent value="password">
        <>
          <CardHeader className="mb-4">
            <Typography
              tag="h2"
              size="heading2"
            >
              Unselected
            </Typography>
          </CardHeader>
          <CardContent>
            <>
              <ul className="mb-12 ml-[15px] list-disc">
                <li>Tokens Unselected</li>
                <li>Rewards</li>
              </ul>
              <div className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
              </div>
            </>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto px-10">Learn More</Button>
          </CardFooter>
        </>
      </TabsContent>
    </Tabs>
  ),
};

export const Underline: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
  },
  render: () => (
    <Tabs
      defaultValue="post"
      className="w-[600px]"
      variant="underline"
    >
      <TabsList className="w-full">
        <TabsTrigger
          value="post"
          details="1,1k"
        >
          Post
        </TabsTrigger>
        <TabsTrigger
          value="followers"
          details="2,567"
        >
          Followers
        </TabsTrigger>
        <TabsTrigger
          value="following"
          details="3,154"
        >
          Following
        </TabsTrigger>
        <TabsTrigger
          value="nft"
          details="202"
        >
          NFTs
        </TabsTrigger>
      </TabsList>
      <TabsContent value="post">
        <>
          <CardHeader className="mb-4">
            <Typography
              tag="h2"
              size="heading2"
            >
              Post
            </Typography>
          </CardHeader>
          <CardContent>
            <>
              <ul className="mb-12 ml-[15px] list-disc">
                <li>Post</li>
                <li>Rewards</li>
              </ul>
              <div className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
              </div>
            </>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto px-10">Learn More</Button>
          </CardFooter>
        </>
      </TabsContent>
      <TabsContent value="followers">
        <>
          <CardHeader className="mb-4">
            <Typography
              tag="h2"
              size="heading2"
            >
              Followers
            </Typography>
          </CardHeader>
          <CardContent>
            <>
              <ul className="mb-12 ml-[15px] list-disc">
                <li>Followers</li>
                <li>Rewards</li>
              </ul>
              <div className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
              </div>
            </>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto px-10">Learn More</Button>
          </CardFooter>
        </>
      </TabsContent>
      <TabsContent value="following">
        <>
          <CardHeader className="mb-4">
            <Typography
              tag="h2"
              size="heading2"
            >
              Following
            </Typography>
          </CardHeader>
          <CardContent>
            <>
              <ul className="mb-12 ml-[15px] list-disc">
                <li>Following</li>
                <li>Rewards</li>
              </ul>
              <div className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
              </div>
            </>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto px-10">Learn More</Button>
          </CardFooter>
        </>
      </TabsContent>
      <TabsContent value="nft">
        <>
          <CardHeader className="mb-4">
            <Typography
              tag="h2"
              size="heading2"
            >
              NFTs
            </Typography>
          </CardHeader>
          <CardContent>
            <>
              <ul className="mb-12 ml-[15px] list-disc">
                <li>NFTs</li>
                <li>Rewards</li>
              </ul>
              <div className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
              </div>
            </>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto px-10">Learn More</Button>
          </CardFooter>
        </>
      </TabsContent>
    </Tabs>
  ),
};

export const NavLabel: Story = {
  parameters: {
    author: AUTHORS['vadym.melnicenko'],
  },
  render: () => (
    <Tabs
      defaultValue="account"
      className="w-[500px]"
      variant="navLabel"
    >
      <TabsList className="w-full">
        <TabsTrigger value="account">Selected</TabsTrigger>
        <TabsTrigger value="password">Unselected</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <>
          <CardHeader className="mb-4">
            <Typography
              tag="h2"
              size="heading2"
            >
              Selected
            </Typography>
          </CardHeader>
          <CardContent>
            <>
              <ul className="mb-12 ml-[15px] list-disc">
                <li>Tokens Selected</li>
                <li>Rewards</li>
              </ul>
              <div className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
              </div>
            </>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto px-10">Learn More</Button>
          </CardFooter>
        </>
      </TabsContent>
      <TabsContent value="password">
        <>
          <CardHeader className="mb-4">
            <Typography
              tag="h2"
              size="heading2"
            >
              Unselected
            </Typography>
          </CardHeader>
          <CardContent>
            <>
              <ul className="mb-12 ml-[15px] list-disc">
                <li>Tokens Unselected</li>
                <li>Rewards</li>
              </ul>
              <div className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
              </div>
            </>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto px-10">Learn More</Button>
          </CardFooter>
        </>
      </TabsContent>
    </Tabs>
  ),
};
