import linksMock from '../../components/NavLinks/mock';

interface MockData {
  links: typeof linksMock;
  logoData: {
    text: string;
    link: string;
    srcImg?: string;
  };
  footerHtml: string;
}

const mock: MockData = {
  links: linksMock,
  logoData: {
    text: 'Logo',
    link: '#',
    srcImg: '/assets/images/logo.svg',
  },
  footerHtml: '<p><a href="https://github.com/Robson777555/landingpages_strapiv1">Feito com ❤ por Robson Jobim</a></p>',
};

export default mock;