import React from 'react';
import FooterKetamine, { KetamineLocations } from './FooterKetamine';
import HeaderKetamine from './HeaderKetamine';
import { ContactAvailabilityProvider } from '../ContactAvailability';

const Layout2 = ({ children, afterLocations }) => {
  return (
    <ContactAvailabilityProvider>
      <HeaderKetamine />
      <main id="main-content" className="text-gray-900" tabIndex={-1}>
        {children}
        <KetamineLocations />
        {afterLocations}
      </main>
      <FooterKetamine />
    </ContactAvailabilityProvider>
  );
};

export default Layout2;
