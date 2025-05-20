'use client';
import React, { useState, useEffect } from 'react';
import { Base } from '../../templates/Base/Base';
import mockBase from '../../templates/Base/mockWithChildren';
import { PaginaNaoEncontrada } from '../../templates/PaginaNaoEncontrada/PaginaNaoEncontrada';
import { Loading } from '../../templates/Loading/Loading';
import * as Styled from './styles';

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, /* setHasError */] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Exemplo: setHasError(true) para simular erro
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