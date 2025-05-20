'use client';
import React, { useEffect, useRef } from 'react';
import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material/KeyboardArrowUp';

export const GoTop = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const scrollToTop = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.preventDefault?.();

    try {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } catch (error: unknown) {
      // Adicionando tipagem para o error e usando ele
      if (error instanceof Error) {
        console.error('Scroll error:', error.message);
      }
      // Fallback para browsers mais antigos
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    // Função wrapper para compatibilidade com EventListener
    const handleClick = (e: Event) => {
      scrollToTop(e as unknown as React.MouseEvent);
    };

    const handleTouch = (e: Event) => {
      scrollToTop(e as unknown as React.TouchEvent);
    };

    const options = { passive: false } as AddEventListenerOptions;

    button.addEventListener('click', handleClick);
    button.addEventListener('touchstart', handleTouch, options);

    return () => {
      button.removeEventListener('click', handleClick);
      button.removeEventListener('touchstart', handleTouch);
    };
  }, []);

  return (
    <Styled.Container
      ref={buttonRef}
      href="#top"
      aria-label="Go to top"
      onClick={(e: React.MouseEvent) => {
        e.preventDefault();
        scrollToTop(e);
      }}
    >
      <KeyboardArrowUp size={24} />
    </Styled.Container>
  );
};