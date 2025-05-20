import styled, { css, DefaultTheme } from 'styled-components';

type Size = 'small' | 'medium' | 'large';

const sizes = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.small};
    line-height: 1.4;
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.medium};
    line-height: 1.5;
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.large};
    line-height: 1.6;
  `,
};

interface ContainerProps {
  $size: Size;
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, $size }) => css`
    font-family: ${theme.fonts.family.default};
    color: ${theme.colors.primaryColor};
    margin: ${theme.spacings.small} 0;

    ${sizes[$size](theme)};

    a {
      color: ${theme.colors.secondaryColor};
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: ${theme.colors.primaryColor};
        text-decoration: underline;
      }
    }

    @media ${theme.media.lteMedium} {
      font-size: ${theme.fonts.sizes.small};
    }
  `}
`;