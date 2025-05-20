import styled, { css, DefaultTheme } from 'styled-components';

interface TitleProps {
  $colorDark?: boolean;
  $size?: 'small' | 'medium' | 'big' | 'huge';
  $uppercase?: boolean;
}

const mediaFontSize = (theme: DefaultTheme) => css`
  @media (max-width: 768px) {
    font-size: ${theme.fonts.sizes.xlarge};
  }
`;

export const Title = styled('h2').attrs<TitleProps>(({ as = 'h2' }) => ({
  as,
}))<TitleProps>`
  font-weight: bold;
  text-align: center;
  white-space: normal;
  word-break: break-word;
  width: 100%;
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  color: ${({ theme, $colorDark }) => 
    $colorDark ? theme.colors.primaryColor : theme.colors.white};
  text-transform: ${({ $uppercase }) => $uppercase ? 'uppercase' : 'none'};
  font-size: ${({ theme, $size }) => {
    switch($size) {
      case 'small': return theme.fonts.sizes.small;
      case 'medium': return theme.fonts.sizes.medium;
      case 'big': return theme.fonts.sizes.large;
      case 'huge': return theme.fonts.sizes.xlarge;
      default: return theme.fonts.sizes.xlarge;
    }
  }};

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  ${({ theme }) => mediaFontSize(theme)}
`;