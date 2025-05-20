'use client';
import React from 'react';
import { MenuLink } from '../MenuLink/MenuLink';
import * as Styled from './styles';

interface LinkProps {
  children: string;
  link: string;
  newTab?: boolean;
}

interface NavLinksProps {
  links?: LinkProps[];
  onLinkClick?: () => void;
}

export const NavLinks = ({ links = [], onLinkClick }: NavLinksProps) => {
  return (
    <Styled.Container aria-label="Main menu" role="navigation">
      {links.map((link) => (
        <MenuLink
          key={link.link}
          {...link}
          onClick={onLinkClick}
          data-testid={`navlink-${link.link.replace('#', '')}`}
        />
      ))}
    </Styled.Container>
  );
};