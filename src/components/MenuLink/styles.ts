import styled, { css } from 'styled-components';

interface ContainerProps {
  $isActive?: boolean;
}

export const Container = styled.a<ContainerProps>`
  ${({ theme, $isActive }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.fonts.sizes.small};
    padding: ${theme.spacings.xsmall};
    color: ${$isActive ? theme.colors.secondaryColor : theme.colors.primaryColor};
    position: relative;
    text-transform: uppercase;
    transition: all 0.3s ease;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      bottom: 0.5rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background-color: ${theme.colors.secondaryColor};
      transition: all 300ms ease-in-out;
    }

    &:hover {
      color: ${theme.colors.secondaryColor};

      &::after {
        left: 25%;
        width: 50%;
      }
    }

    @media ${theme.media.lteMedium} {
      font-size: ${theme.fonts.sizes.medium};
      padding: ${theme.spacings.medium};
      text-align: center;
      min-height: 44px;
      width: 100%;
    }
  `}
`;