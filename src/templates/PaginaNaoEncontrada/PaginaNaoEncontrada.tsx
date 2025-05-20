'use client';
import React from 'react';
import { GridContent } from '../../components/GridContent/GridContent';
import Head from 'next/head';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface PaginaNaoEncontradaProps {}

export const PaginaNaoEncontrada: React.FC<PaginaNaoEncontradaProps> = () => {
  return (
    <>
      <Head>
        <title>Página Não Encontrada | 404</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <GridContent
        title="Error 404"
        html="<p>A página que você está buscando não foi encontrada.</p>"
        background={true}
      />
    </>
  );
};