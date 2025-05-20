interface Link {
  children: string;
  link: string;
  newTab?: boolean;
}

const mock: Link[] = [
  {
    children: 'Serviços',
    link: '#target1',
    newTab: false,
  },
  {
    children: 'Tecnologias usadas',
    link: '#target2',
    newTab: false,
  },
  {
    children: 'Tecnologias essenciais',
    link: '#target3',
    newTab: false,
  },
];

export default mock;