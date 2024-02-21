import React from 'react';
import FooterKetamine from './FooterKetamine';
import HeaderKetamine from './HeaderKetamine';

const Layout2 = ({ children }) => {
  return (
    <>
      <HeaderKetamine />
       <main className="text-gray-900">{children}</main>
      <FooterKetamine />
    </>
  );
};

export default Layout2;
