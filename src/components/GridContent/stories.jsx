import React from 'react';
import { GridContent } from './GridContent';
import mock from './mock';

export default {
  title: 'GridContent',
  component: GridContent,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <GridContent {...args} />;

export const Default = Template.bind({});

export const WithBackground = Template.bind({});
WithBackground.args = {
  ...mock,
  background: true,
};
