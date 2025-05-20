import styled, { css } from 'styled-components';

export const MobileGridTwoCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => css`
    width: 100%;
    max-width: 98vw;
    min-width: 0;
    padding: ${theme.spacings.small};
    box-sizing: border-box;

    h2, h3, h4, h5, h6 {
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      white-space: normal;
      word-break: break-word;
      width: 100%;
      line-height: 1.2;
      margin-bottom: ${theme.spacings.small};
    }
    p, span, div {
      font-size: 1rem;
      text-align: center;
      white-space: normal;
      word-break: break-word;
      width: 100%;
      line-height: 1.3;
    }
    img, .next-image {
      max-width: 220px;
      width: 100%;
      height: auto;
      margin: 0 auto;
      display: block;
    }
  `}
`;
