import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
const FooterKetamine = () => (
  <footer id="location" className="ketamine-footer">
    <div className="ketamine-container ketamine-footer-grid">
      <div>
        <h2>Visit our Torrance clinic</h2>
        <a
          href="tel:+13104377399"
          className="ketamine-footer-phone"
          data-cta="call-cta"
          data-section="footer"
        >
          (310) 437-7399
        </a>
        <address>
          <a
            href="https://maps.app.goo.gl/bsW8pXVBxdGA8ZAYA"
            target="_blank"
            rel="noopener noreferrer"
          >
            23150 Crenshaw Blvd, Suite 100
            <br />
            Torrance, CA 90505
          </a>
        </address>
        <p>
          Serving the South Bay, Long Beach
          <br />
          and Greater Los Angeles.
        </p>
      </div>
      <div>
        <h2>Pacific Pain & Wellness Group</h2>
        <ul>
          <li>
            <a href="https://pacificpaingroup.com/">Visit our main website</a>
          </li>
          <li>
            <a href="https://pacificpaingroup.com/terms-of-use">Terms of Use</a>
          </li>
          <li>
            <a href="https://pacificpaingroup.com/privacy-policy">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="ketamine-seal">
        <StaticImage
          src="../../images/legit-script-seal.png"
          alt="LegitScript certification logo"
          width={150}
        />
      </div>
    </div>
  </footer>
);
export default FooterKetamine;
