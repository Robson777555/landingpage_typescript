'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { Base } from '@/templates/Base/Base';
import mockBase from '@/templates/Base/mockWithChildren';
import { PaginaNaoEncontrada } from '@/components/PaginaNaoEncontrada/PaginaNaoEncontrada';
import { Loading } from '@/components/Loading/Loading';
import * as Styled from './styles';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Para uso futuro - tratamento de erros
  const errorState = useState(false);
  const [hasError] = errorState; // Apenas leitura

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Exemplo: errorState[1](true) para simular erro
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loading />;
  if (hasError) return <PaginaNaoEncontrada />;

  return (
    <Styled.Wrapper>
      <Base {...mockBase} />
    </Styled.Wrapper>
  );
}
