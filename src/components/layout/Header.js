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

        <AnchorLink className="px-6" href="#about">
          About&nbsp;Us
        </AnchorLink>
        <AnchorLink className="px-4" href="#dr-ananth">
          Dr.&nbsp;Ananth
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Testimonials
        </AnchorLink>
        <AnchorLink className="px-4" href="#contact">
          Contact
        </AnchorLink>

      </div>
      <div className="hidden md:block">
        <ButtonKetamine size="lg">Am I a Candidate?</ButtonKetamine>
      </div>
    </div>
  </header>
);

export default Header;
