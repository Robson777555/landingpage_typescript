import styled, { css, DefaultTheme } from 'styled-components';

const containerBackgroundActive = (theme: DefaultTheme) => css`
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.white};

  a {
    color: ${theme.colors.white};

    &:hover {
      color: ${theme.colors.mediumGray};
    }
  }
`;

interface ContainerProps {
  background?: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, background }) => css`
    font-family: ${theme.fonts.family.default};
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    min-height: 100vh;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;

    ${background && containerBackgroundActive(theme)};

    @media (max-width: 768px) {
      padding: ${theme.spacings.large} 0;
      min-height: auto;
    }
  `}
`;