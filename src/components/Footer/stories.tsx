import React from 'react';
import { Footer } from './Footer';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: '<p><a href="https://github.com/Robson777555/landingpages_strapiv1">Feito com ❤ por Robson Jobim</a></p>',
  },
} as Meta<typeof Footer>;

export const Template: StoryObj<typeof Footer> = {
  render: (args) => (
    <div>
      <Footer {...args} />
    </div>
  )
};