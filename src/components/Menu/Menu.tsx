'use client';
import React, { useState, useEffect } from 'react';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import { LogoLink } from '../LogoLink/LogoLink';
import { NavLinks } from '../NavLinks/NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

interface LinkProps {
  children: string;
  link: string;
  newTab?: boolean;
}

interface LogoDataProps {
  text: string;
  link: string;
  srcImg?: string;
}

interface MenuProps {
  links?: LinkProps[];
  logoData: LogoDataProps;
}

export const Menu = ({ links = [], logoData }: MenuProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Verificação inicial e listener para redimensionamento
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleLinkClick = () => {
    if (isMobile) {
      setIsVisible(false);
    }
  };

  return (
    <>
      <Styled.Container $isVisible={isVisible}>
        <SectionContainer>
          <Styled.MenuContent>
            <LogoLink {...logoData} />
            <NavLinks links={links} onLinkClick={handleLinkClick} />
          </Styled.MenuContent>
        </SectionContainer>
      </Styled.Container>

      {isMobile && (
        <Styled.Button
          onClick={() => setIsVisible((prev) => !prev)}
          aria-label={isVisible ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isVisible}
        >
          {isVisible ? (
            <CloseIcon aria-hidden="true" />
          ) : (
            <MenuIcon aria-hidden="true" />
          )}
        </Styled.Button>
      )}
    </>
  );
};

export default Menu;