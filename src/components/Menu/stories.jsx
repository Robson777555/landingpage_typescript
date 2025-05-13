import React from 'react';
import { Menu } from './Menu';
import linksMock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    links: {
      control: {
        type: 'object',
      },
    },
    logoData: {
      control: {
        type: 'object',
      },
    },
  },
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: '',
    },
  },
};

const Template = (args) => <Menu {...args} />;

export const Desktop = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};