'use client';
import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { Menu } from '../../components/Menu/Menu';
import { Footer } from '../../components/Footer/Footer';
import { GoTop } from '../../components/GoTop/GoTop';
import { ScrollToAnchor } from '../../components/ScrollToAnchor/ScrollToAnchor';
import { GlobalMobileStyles } from './styles';

export const Base = ({ links, logoData, footerHtml, children }) => {
  return (
    <>
      <GlobalMobileStyles />
      <ScrollToAnchor />
      <Menu links={links} logoData={logoData} />
      <Styled.ContentWrapper>
        <Styled.MainContent>{children}</Styled.MainContent>
        <Footer footerHtml={footerHtml} />
      </Styled.ContentWrapper>
      <GoTop />
    </>
  );
};

Base.propTypes = {
  children: PropTypes.node.isRequired,
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
  footerHtml: PropTypes.string.isRequired,
};
