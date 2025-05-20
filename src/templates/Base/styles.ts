import styled, { css, createGlobalStyle } from 'styled-components';

export const GlobalMobileStyles = createGlobalStyle`
  @media (max-width: 768px) {
    html, body {
      overflow-x: hidden;
      width: 100% !important;
    }

    [id] {
      scroll-margin-top: 60px;
    }
  }
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.default};
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      min-height: -webkit-fill-available;
    }
  `}
`;

export const MainContent = styled.main`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.default};
    flex: 1;
    width: 100%;

    @media (max-width: 768px) {
      .mobile-section {
        width: 100vw !important;
        padding: 0 1rem !important;
        margin: 0 !important;
      }
    }
  `}
`;