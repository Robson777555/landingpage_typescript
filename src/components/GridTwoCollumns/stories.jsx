import React from 'react';
import { GridTwoCollumns } from './GridTwoCollumns';
import mock from './mock';

export default {
  title: 'GridTwoCollumns',
  component: GridTwoCollumns,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <GridTwoCollumns {...args} />;

export const Default = Template.bind({});

export const WithBackground = Template.bind({});
WithBackground.args = {
  ...mock,
  background: true,
};
