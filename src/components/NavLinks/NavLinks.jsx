'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { MenuLink } from '../MenuLink/MenuLink';
import * as Styled from './styles';

export const NavLinks = ({ links = [], onLinkClick }) => {
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

NavLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      newTab: PropTypes.bool,
    }),
  ),
  onLinkClick: PropTypes.func,
};

NavLinks.defaultProps = {
  links: [],
  onLinkClick: null,
};
