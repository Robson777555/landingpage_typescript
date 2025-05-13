import styled, { css } from 'styled-components';

const mediaFontSize = (theme) => css`
  @media (max-width: 768px) {
    font-size: ${theme.fonts.sizes.xlarge};
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  text-align: center;
  white-space: normal;
  word-break: break-word;
  width: 100%;
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacings.medium};

  @media (max-width: 768px) {
    font-size: 2rem; // ajuste conforme seu design
  }

  ${({ theme }) => mediaFontSize(theme)}
`;