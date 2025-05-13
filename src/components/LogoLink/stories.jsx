import React from 'react';
import { LogoLink } from './LogoLink';

export default {
  title: 'Components/LogoLink',
  component: LogoLink,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Texto do logo (se não usar imagem)',
    },
    srcImg: {
      control: 'text',
      description: 'Caminho para a imagem do logo',
    },
    link: {
      control: 'text',
      description: 'URL de destino do link',
    },
  },
  args: {
    text: 'My Logo',
    srcImg: '',
    link: '/',
  },
};

const Template = (args) => <LogoLink {...args} />;

export const TextLogo = Template.bind({});
TextLogo.args = {
  text: 'Text Logo',
  srcImg: '',
  link: '/',
};

export const ImageLogo = Template.bind({});
ImageLogo.args = {
  text: 'Image Logo',
  srcImg: '/logo.svg', // Substitua pelo caminho real da sua imagem
  link: 'https://example.com',
};

export const Combined = Template.bind({});
Combined.args = {
  text: 'Logo + Text',
  srcImg: '/logo.svg', // Substitua pelo caminho real da sua imagem
  link: '/about',
};
