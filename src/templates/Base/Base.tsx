'use client';
import React, { ReactNode } from 'react';
import * as Styled from './styles';
import { Menu } from '../../components/Menu/Menu';
import { Footer } from '../../components/Footer/Footer';
import { GoTop } from '../../components/GoTop/GoTop';
import { ScrollToAnchor } from '../../components/ScrollToAnchor/ScrollToAnchor';
import { GlobalMobileStyles } from './styles';

interface Link {
  children: string;
  link: string;
  newTab?: boolean;
}

interface LogoData {
  text: string;
  link: string;
  srcImg?: string;
}

interface BaseProps {
  children: ReactNode;
  links?: Link[];
  logoData: LogoData;
  footerHtml: string;
}

export const Base = ({ links, logoData, footerHtml, children }: BaseProps) => {
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