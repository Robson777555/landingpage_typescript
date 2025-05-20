import 'styled-components';

// Tipagem baseada no theme.ts

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryColor: string;
      secondaryColor: string;
      white: string;
      black: string;
      mediumGray: string;
      darkBg: string;
      lightBg: string;
    };
    fonts: {
      family: {
        default: string;
        secondary: string;
      };
      sizes: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
        xhuge: string;
      };
      weight: {
        normal: number;
        bold: number;
        black: number;
      };
    };
    media: {
      lteMedium: string;
      lteSmall: string;
      iphone: string;
    };
    spacings: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      huge: string;
      xhuge: string;
    };
  }
} 