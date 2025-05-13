// src/components/GridContent/styles.js
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.default};
    text-align: center;
    max-width: 58rem;
    margin: 0 auto;
    padding: 0 ${theme.spacings.large};
  `}
`;

export const HtmlContainer = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.default};
    margin: ${theme.spacings.xhuge} 0;
    text-align: left;

    & > * {
      margin-bottom: ${theme.spacings.medium};
    }

    h1, h2, h3, h4, h5, h6 {
      margin: ${theme.spacings.large} 0;
    }

    pre {
      display: inline-block;
      margin: 0 auto;
      background: rgba(0,0,0,0.1);
      padding: ${theme.spacings.small};
      border-radius: ${theme.spacings.xsmall};
      overflow-x: auto;
      max-width: 100%;
    }

    blockquote {
      border-left: 3px solid ${theme.colors.primaryColor};
      padding-left: ${theme.spacings.medium};
      font-style: italic;
      color: ${theme.colors.mediumGray};
    }

    a {
      color: ${theme.colors.primaryColor};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  `}
`;