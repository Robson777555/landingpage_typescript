export const theme = {
  colors: {
    primaryColor: '#0A1128',
    secondaryColor: '#dc143c',
    white: '#FFFFFF',
    black: '#000000',
    mediumGray: '#DDDDDD',
    darkBg: '#121212',
    lightBg: '#FFFFFF',
  },
  fonts: {
    family: {
      default: "'Open Sans', sans-serif",
      secondary: "'Montserrat', sans-serif",
    },
    sizes: {
      xsmall: '0.8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },

    weight: {
      normal: 400,
      bold: 700,
      black: 900,
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
    lteSmall: '(max-width: 480px)',
    iphone: '(max-width: 400px)',
  },
  spacings: {
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
};

export const criticalCSS = `
  :root {
    --color-primary: ${theme.colors.primaryColor};
    --color-secondary: ${theme.colors.secondaryColor};
    --color-white: ${theme.colors.white};
    --color-black: ${theme.colors.black};
    --color-medium-gray: ${theme.colors.mediumGray};
    --color-dark-bg: ${theme.colors.darkBg};
    --color-light-bg: ${theme.colors.lightBg};
    --font-family-default: ${theme.fonts.family.default};
    --font-family-secondary: ${theme.fonts.family.secondary};
    --font-size-small: ${theme.fonts.sizes.small};
    --font-size-medium: ${theme.fonts.sizes.medium};
    --spacing-medium: ${theme.spacings.medium};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: ${theme.fonts.sizes.small};
    background: var(--color-light-bg) !important;
    font-family: var(--font-family-default);
    margin: 0;
    min-height: 100vh;
    color: var(--color-black);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-secondary);
    font-weight: 900;
    margin: ${theme.spacings.medium} 0;
    color: var(--color-primary);
  }

  p {
    margin: ${theme.spacings.medium} 0;
    font-size: var(--font-size-small);
  }

  ul, ol {
    margin: ${theme.spacings.medium};
    padding: ${theme.spacings.medium};
  }

  a {
    color: var(--color-secondary);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: var(--color-primary);
  }

  h1 {
    background: var(--color-secondary);
    color: var(--color-white);
    padding: ${theme.spacings.medium};
    font-size: ${theme.fonts.sizes.large};
  }

  h1:hover {
    background: var(--color-primary);
  }
`;

export default theme;
