
'use client';
import React from 'react';
import { useEffect, useRef } from 'react';
import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material/KeyboardArrowUp';

export const GoTop = () => {
  const buttonRef = useRef(null);

  const scrollToTop = (e) => {
    e?.preventDefault?.();

    try {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      //eslint-disable-next-line 
    } catch (error) {
      // Fallback para browsers mais antigos
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const options = { passive: false };

    button.addEventListener('click', scrollToTop);
    button.addEventListener('touchstart', scrollToTop, options);

    return () => {
      button.removeEventListener('click', scrollToTop);
      button.removeEventListener('touchstart', scrollToTop, options);
    };
  }, []);

  return (
    <Styled.Container
      ref={buttonRef}
      href="#top"
      aria-label="Go to top"
      onClick={(e) => e.preventDefault()}
    >
      <KeyboardArrowUp size={24} />
    </Styled.Container>
  );
};
