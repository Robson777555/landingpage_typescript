'use client';
import React, { MouseEvent } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as Styled from './styles';

interface MenuLinkProps {
  children: React.ReactNode;
  link: string;
  newTab?: boolean;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export const MenuLink = ({ children, link, newTab = false, onClick }: MenuLinkProps) => {
  const pathname = usePathname();
  const isInternalLink = link.startsWith('#') || link.startsWith('/');
  const isActive = pathname === link;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);

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