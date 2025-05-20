import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.default};
    max-width: 1200px;
    margin: 0 auto;
    padding: ${theme.spacings.xlarge};

    ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
      text-align: center;
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};
    margin-top: ${theme.spacings.large};

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: ${theme.spacings.xlarge};
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.medium};
    background: ${theme.colors.white};
    border-radius: ${theme.spacings.small};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    overflow: hidden;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    ${HeadingContainer} {
      position: relative;
      left: 0;
      margin-bottom: ${theme.spacings.medium};
      font-size: 2.4rem;
      text-align: center;
      word-break: break-word;
      white-space: normal;
      font-weight: bold;
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }

    ${HeadingContainer}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: 4rem;
      top: -2rem;
      left: 0.5rem;
      transform: rotate(0deg);
      color: ${theme.colors.mediumGray};
      opacity: 0.3;
      z-index: 0;
      @media (max-width: 768px) {
        font-size: 2.5rem;
        top: -1.2rem;
        left: 0.5rem;
      }
    }

    ${TextComponent} {
      text-align: left;
      font-size: 1.2rem;
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  `}
`;

export const Title = styled.h3`
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
