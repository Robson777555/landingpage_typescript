import React from 'react';
import { GridImage } from './GridImage';
import mock from './mock';

export default {
  title: 'GridImage',
  component: GridImage,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <GridImage {...args} />;

export const Default = Template.bind({});

export const WithBackground = Template.bind({});
WithBackground.args = {
  ...mock,
  background: true,
};
