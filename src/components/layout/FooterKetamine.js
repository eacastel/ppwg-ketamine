import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const FooterKetamine = () => {
  return (
    <footer id="contact" className="container mx-auto py-8 px-3 mt-10 mb-20 text-gray-800">
      <div className="flex -mx-3">
        <div className="flex-1 px-3">
          <h2 className="text-lg font-semibold">Call Us / Our Location</h2>
          <p className="mt-5">
            <a href="tel:+13104377399" rel="nofollow">(310) 437-7399</a>
          </p>
          <p className="mt-5">
              <a href="https://maps.app.goo.gl/bsW8pXVBxdGA8ZAYA" target="_blank">23150 Crenshaw Blvd #100<br />
                Torrance, CA 90505</a>
 </p>
        </div>
        <div className="flex-1 px-3">
          <h2 className="text-lg font-semibold">Important Links</h2>
          <ul className="mt-4 leading-loose">
            <li>
              <a href="https://pacificpaingroup.com/"  target="_blank">Pacific Pain & Wellness Group</a>
            </li>
            <li>
              <a href="https://pacificpaingroup.com/terms-of-use"  target="_blank">Terms of Use</a>
            </li>
            <li>
              <a href="https://pacificpaingroup.com/privacy-policy"  target="_blank">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 px-3">
          <ul className="mt-4 leading-loose relative">
            <li>
            <StaticImage src="../../images/legit-script-seal.png" alt="LegitScript certification logo" className="absolute top-0 right-0 "  />
            
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterKetamine;
