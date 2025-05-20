import React from 'react';
import { GridImage } from './GridImage';
import mock from './mock';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GridImage> = {
  title: 'GridImage',
  component: GridImage,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof GridImage>;

export const Default: Story = {
  render: (args) => <GridImage {...args} />,
};

export const WithBackground: Story = {
  args: {
    ...mock,
    background: true,
  },
};