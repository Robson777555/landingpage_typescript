import React from 'react';
import { Footer } from './Footer';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml:
      '<p><a href="https://github.com/Robson777555/landingpages_strapiv1">Feito com ❤ por Robson Jobim</a></p>',
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
