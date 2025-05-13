import React from 'react';
import { GridSection } from './GridSection';
import mock from './mock';

export default {
  title: 'GridSection',
  component: GridSection,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <GridSection {...args} />;

export const Default = Template.bind({});

export const WithBackground = Template.bind({});
WithBackground.args = {
  ...mock,
  background: true,
};
