import styled, { css, DefaultTheme } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }: { theme: DefaultTheme }) => css`
    background: transparent;
    color: ${theme.colors.primaryColor};
    position: relative;
    z-index: 2;
    padding-top: 4.5rem;

    @media (max-width: 768px) {
      padding-top: 3.5rem;
    }
  `}
`;