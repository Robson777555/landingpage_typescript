'use client';
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as Styled from './styles';

export const MenuLink = ({ children, link, newTab = false, onClick }) => {
  const pathname = usePathname();
  const isInternalLink = link.startsWith('#') || link.startsWith('/');
  const isActive = pathname === link;

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();

      if (link.startsWith('#')) {
        setTimeout(() => {
          const targetElement = document.querySelector(link);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }, 300);
      }
    }
  };

  if (isInternalLink) {
    return (
      <Link href={link} passHref legacyBehavior>
        <Styled.Container
          $isActive={isActive}
          target={newTab ? '_blank' : '_self'}
          rel={newTab ? 'noopener noreferrer' : undefined}
          onClick={handleClick}
        >
          {children}
        </Styled.Container>
      </Link>
    );
  }

  return (
    <Styled.Container
      href={link}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener noreferrer' : undefined}
      onClick={handleClick}
    >
      {children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
  onClick: PropTypes.func,
};
