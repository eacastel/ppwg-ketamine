import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ButtonKetamine from '../ButtonKetamine';
import { CallOrCallback } from '../ContactAvailability';
const HeaderKetamine = () => (
  <header className="ketamine-header">
    <a className="ketamine-skip" href="#main-content">
      Skip to content
    </a>
    <div className="ketamine-container ketamine-header-inner">
      <a
        href="#top"
        className="ketamine-logo"
        aria-label="Pacific Pain and Wellness Group, top of page"
      >
        <StaticImage
          src="../../images/ppwg-logo.png"
          alt="Pacific Pain & Wellness Group"
          width={220}
          placeholder="none"
        />
      </a>
      <nav className="ketamine-nav" aria-label="Ketamine care">
        <a href="#ketamine-care">Our care</a>
        <a href="#process">What to expect</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQs</a>
      </nav>
      <ButtonKetamine section="header" className="ketamine-header-cta">
        Start the assessment
      </ButtonKetamine>
      <CallOrCallback
        section="header"
        className="ketamine-header-call"
        callLabel="Call our team"
      />
    </div>
  </header>
);
export default HeaderKetamine;
