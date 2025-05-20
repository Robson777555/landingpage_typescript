
import { GridTwoCollumns } from './GridTwoCollumns';
import mock from './mock';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'GridTwoCollumns',
  component: GridTwoCollumns,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof GridTwoCollumns>;

type Story = StoryObj<typeof GridTwoCollumns>;

export const Default: Story = {};

export const WithBackground: Story = {
  args: {
    ...mock,
    background: true,
  },
};