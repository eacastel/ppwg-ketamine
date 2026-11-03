import React from 'react';
import FooterKetamine, { KetamineLocations } from './FooterKetamine';
import HeaderKetamine from './HeaderKetamine';

const Layout2 = ({ children, afterLocations }) => {
  return (
    <>
      <HeaderKetamine />
      <main id="main-content" className="text-gray-900" tabIndex={-1}>
        {children}
        <KetamineLocations />
        {afterLocations}
      </main>
      <FooterKetamine />
    </>
  );
};

export default Layout2;
