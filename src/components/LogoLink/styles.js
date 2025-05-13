import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.small};
  text-decoration: none;
  color: inherit;
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  font-weight: bold;
  text-transform: uppercase;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  > img {
    max-height: 3rem;
    width: auto;
    object-fit: contain;
  }
`;