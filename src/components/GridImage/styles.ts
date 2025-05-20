// src/components/GridImage/styles.js
import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.default};
    max-width: 1200px;
    margin: 0 auto;
    padding: ${theme.spacings.xlarge};

    > ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};
    margin-top: ${theme.spacings.large};

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: ${theme.spacings.large};
      justify-items: center;
    }
  `}
`;

export const GridElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => css`
    border-radius: ${theme.spacings.small};
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 300ms ease-in-out;
    width: 100%;
    max-width: 340px;
    margin: 0 auto;
    padding: ${theme.spacings.medium};

    &:hover {
      transform: translateY(-5px);
    }

    img, .next-image {
      max-width: 220px;
      width: 100%;
      height: auto;
      margin: 0 auto;
      display: block;
    }

    h2, h3, h4, h5, h6 {
      font-size: 2.4rem;
      font-weight: bold;
      text-align: center;
      white-space: normal;
      word-break: break-word;
      width: 100%;
      line-height: 1.2;
      margin-bottom: ${theme.spacings.small};
    }

    @media (max-width: 768px) {
      padding: ${theme.spacings.small};
      max-width: 98vw;
      min-width: 0;
      h2, h3, h4, h5, h6 {
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        white-space: normal;
        word-break: break-word;
        width: 100%;
        line-height: 1.2;
      }
    }
  `}
`;
