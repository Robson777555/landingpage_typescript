// src/components/GoTop/styles.js
import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    bottom: 2rem;
    right: 2rem;
    border-radius: 50%;
    z-index: 6;
    opacity: 0.7;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);

    /* Melhorias para mobile */
    @media (max-width: 768px) {
      width: 3.5rem;
      height: 3.5rem;
      bottom: 1.5rem;
      right: 1.5rem;
    }

    &:hover {
      opacity: 1;
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    }

    /* Melhorias de acessibilidade */
    &:focus {
      outline: 2px solid ${theme.colors.secondaryColor};
      outline-offset: 2px;
    }

    /* Garante que seja clicável em mobile */
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  `}
`;