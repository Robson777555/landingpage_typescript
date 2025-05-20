import styled, { css, DefaultTheme } from 'styled-components';

export const Container = styled.div`
  ${({ theme }: { theme: DefaultTheme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacings.xlarge};
    width: 100%;
    box-sizing: border-box;

    @media ${theme.media.lteMedium} {
      padding: ${theme.spacings.large};
    }

    @media ${theme.media.lteSmall} {
      padding: ${theme.spacings.medium};
    }

    @media (max-width: 400px) {
      padding: ${theme.spacings.small};
    }
  `}
`;