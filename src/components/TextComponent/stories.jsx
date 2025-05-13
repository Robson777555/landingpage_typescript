import React from 'react';
import { TextComponent } from './TextComponent';

export default {
  title: 'TextComponent',
  component: TextComponent,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Text content (supports HTML)',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      defaultValue: 'medium',
    },
    as: {
      control: {
        type: 'select',
        options: ['div', 'p', 'span'],
      },
      defaultValue: 'div',
    },
  },
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Nihil unde quod veritatis quam, exercitationem odit totam.`,
    size: 'medium',
    as: 'div',
  },
};

const Template = (args) => <TextComponent {...args} />;

export const Default = Template.bind({});

export const SmallText = Template.bind({});
SmallText.args = {
  size: 'small',
};

export const LargeText = Template.bind({});
LargeText.args = {
  size: 'large',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  as: 'p',
};

export const WithHTML = Template.bind({});
WithHTML.args = {
  children: 'Text with <a href="#">link</a> and <strong>strong</strong> text',
};