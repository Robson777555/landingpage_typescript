'use client';
import React from 'react';
import * as Styled from './styles';

interface LoadingProps {
  fullScreen?: boolean;
}

export const Loading = ({ fullScreen = true }: LoadingProps) => {
  return (
    <Styled.Container $fullScreen={fullScreen} aria-live="polite" aria-busy="true">
      <Styled.Spinner />
      <Styled.Spinner $small />
    </Styled.Container>
  );
};