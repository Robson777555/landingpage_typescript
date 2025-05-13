'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import { LogoLink } from '../LogoLink/LogoLink';
import { NavLinks } from '../NavLinks/NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

export const Menu = ({ links = [], logoData }) => {
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

Menu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      newTab: PropTypes.bool,
    }),
  ),
  logoData: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    srcImg: PropTypes.string,
  }).isRequired,
};

export default Menu;
