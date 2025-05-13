import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, $isVisible }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: ${theme.colors.white};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    height: ${$isVisible ? '100vh' : '60px'};
    overflow: ${$isVisible ? 'auto' : 'hidden'};

    @media (min-width: 769px) {
      position: static;
      height: auto;
      overflow: visible;
      box-shadow: none;
    }
  `}
`;

export const MenuContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.medium} 0;
    gap: ${theme.spacings.large};

    @media (min-width: 769px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: ${theme.spacings.small} 0;
      gap: ${theme.spacings.medium};
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    display: none;
    position: fixed;
    top: ${theme.spacings.small};
    right: ${theme.spacings.small};
    z-index: 101;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: none;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`;