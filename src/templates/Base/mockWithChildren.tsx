import React, { ReactNode } from 'react';
import mock from './mock';
import gridMock from '../../components/GridSection/mock';
import gridMockImage from '../../components/GridImage/mock';
import gridMockTwoCollumns from '../../components/GridTwoCollumns/mock';
import { GridSection } from '../../components/GridSection/GridSection';
import { GridImage } from '../../components/GridImage/GridImage';
import { GridTwoCollumns } from '../../components/GridTwoCollumns/GridTwoCollumns';

interface MockWithChildren {
  links: typeof mock.links;
  logoData: typeof mock.logoData;
  footerHtml: string;
  children: ReactNode;
}

const mockWithChildren: MockWithChildren = {
  ...mock,
  children: (
    <>
      <div id="target1" className="mobile-section">
        <GridSection {...gridMock} />
      </div>
      <div id="target2" className="mobile-section">
        <GridImage {...gridMockImage} />
      </div>
      <div id="target3" className="mobile-section">
        <GridTwoCollumns {...gridMockTwoCollumns} />
      </div>
    </>
  ),
};

export default mockWithChildren;