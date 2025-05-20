import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
    width: 100%;

    @media (min-width: 769px) {
      flex-direction: row;
      align-items: center;
      gap: ${theme.spacings.medium};
      width: auto;
    }

    /* Estilos para os links filhos */
    a {
      color: ${theme.colors.primaryColor};
      text-decoration: none;
      font-size: ${theme.fonts.sizes.medium};
      padding: ${theme.spacings.small} 0;
      transition: all 0.3s ease;
      font-family: ${theme.fonts.family.default};
      position: relative;
      outline: none;

      &:hover,
      &:focus {
        color: ${theme.colors.secondaryColor};
      }

      /* Mobile styles */
      @media ${theme.media.lteMedium} {
        border-bottom: 1px solid ${theme.colors.mediumGray};
        text-align: center;
        padding: ${theme.spacings.medium};
        width: 100%;
      }

      /* Acessibilidade - foco visível */
      &:focus-visible {
        outline: 2px solid ${theme.colors.secondaryColor};
        outline-offset: 2px;
      }
    }
  `}
`;