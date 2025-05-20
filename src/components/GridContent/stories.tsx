import React from 'react';
import { GridContent } from './GridContent';
import mock from './mock';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GridContent> = {
  title: 'GridContent',
  component: GridContent,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof GridContent>;

export const Default: Story = {
  render: (args) => <GridContent {...args} />,
};

export const WithBackground: Story = {
  args: {
    ...mock,
    background: true,
  },
};