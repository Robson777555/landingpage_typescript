interface GridItem {
  altText: string;
  srcImg: string;
}

interface MockData {
  title: string;
  description: string;
  grid: GridItem[];
  background?: boolean;
}

const mock: MockData = {
  background: false,
  title: '<b style="font-size: 2rem;">Tec</b>',
  description: 'Conheça as principais tecnologias usadas neste projeto:',
  grid: [
    {
      altText: 'JavaScript Logo',
      srcImg: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    },
    {
      altText: 'React Logo',
      srcImg: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
    {
      altText: 'Next.js Logo',
      srcImg: 'https://assets.vercel.com/image/upload/v1662090959/front/nextjs/twitter-card.png',
    },
    {
      altText: 'Node.js Logo',
      srcImg: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    },
    {
      altText: 'Git Logo',
      srcImg: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
    },
  ],
};

export default mock;