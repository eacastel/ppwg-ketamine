import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow z-20">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl ">
        <div className="w-[200px]"><a href="#top">
          <StaticImage src="../../images/ppwg-logo.png" alt="Pacific Pain & Wellness Group Logo" /></a>
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0 font-bold">

        <AnchorLink className="px-6" href="#approach">
          Approach
        </AnchorLink>
        <AnchorLink className="px-4" href="#process">
          Process
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Testimonials
        </AnchorLink>
        <AnchorLink className="px-4" href="#contact">
          Contact
        </AnchorLink>

      </div>
      <div className="hidden md:block">
        <Button className="text-sm font-bold">Get Started</Button>
      </div>
    </div>
  </header>
);

export default Header;
