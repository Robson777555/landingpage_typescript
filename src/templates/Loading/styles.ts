import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

interface ContainerProps {
  $fullScreen?: boolean;
}

interface SpinnerProps {
  $small?: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, $fullScreen }) => css`
    position: ${$fullScreen ? 'fixed' : 'relative'};
    top: 0;
    left: 0;
    width: ${$fullScreen ? '100vw' : '100%'};
    height: ${$fullScreen ? '100vh' : '100%'};
    background-color: ${theme.colors.primaryColor};
    display: grid;
    place-items: center;
    z-index: 1000;
  `}
`;

export const Spinner = styled.div<SpinnerProps>`
  ${({ theme, $small }) => css`
    position: absolute;
    border: 0.5rem solid transparent;
    border-radius: 50%;
    border-top-color: ${theme.colors.secondaryColor};
    border-left-color: ${theme.colors.secondaryColor};
    width: ${$small ? '2rem' : '6rem'};
    height: ${$small ? '2rem' : '6rem'};
    animation: ${rotate} 1s linear ${$small ? 'reverse' : 'normal'} infinite;
  `}
`;