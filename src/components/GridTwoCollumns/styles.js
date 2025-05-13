// src/components/GridTwoCollumns/styles.js
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: ${theme.spacings.large};
    gap: ${theme.spacings.large};

    @media ${theme.media.lteMedium} {
      flex-direction: column;
      text-align: center;
      justify-content: center;
      gap: ${theme.spacings.large};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};

    /* Estilos para mobile */
    @media ${theme.media.lteMedium} {
      align-items: center;
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacings.medium};
    max-width: 400px;
    width: 100%;

    img, .next-image {
      max-width: 100%;
      height: auto;
      width: 100%;
      object-fit: contain;
    }

    @media ${theme.media.lteMedium} {
      padding: ${theme.spacings.large} 0;
      max-width: 300px;
    }
  `}
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  word-break: break-word;
  white-space: normal;
  width: 100%;
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacings.medium};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
