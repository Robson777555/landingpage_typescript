'use client';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.background};
`;

const ErrorTitle = styled.h1`
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
`;

const RetryButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export default function Error({ error, reset }) {
  return (
    <ErrorContainer>
      <ErrorTitle>Ops! Algo deu errado</ErrorTitle>
      <ErrorMessage>{error.message || 'Ocorreu um erro inesperado'}</ErrorMessage>
      <RetryButton onClick={reset}>Tentar novamente</RetryButton>
    </ErrorContainer>
  );
}

Error.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
  reset: PropTypes.func.isRequired,
};
