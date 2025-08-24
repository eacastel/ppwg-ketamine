import React from 'react';


const Footer = () => {
  return (
    <footer id="contact" className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
      <div className="flex -mx-3">
        <div className="flex-1 px-3">
          <h2 className="text-lg font-semibold">Call Us</h2>
          <p className="mt-5">
            <a href="tel:+13104377399" onClick={handlePhoneClick}>(310) 437-7399</a>
          </p>
        </div>
        <div className="flex-1 px-3">
          <h2 className="text-lg font-semibold">Important Links</h2>
          <ul className="mt-4 leading-loose">
            <li>
              <a href="https://pacificpaingroup.com/" target="_blank">Pacific Pain & Wellness Group</a>
            </li>
            <li>
              <a href="https://pacificpaingroup.com/terms-of-use" target="_blank">Terms of Use</a>
            </li>
            <li>
              <a href="https://pacificpaingroup.com/privacy-policy" target="_blank">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 px-3">
          <h2 className="text-lg font-semibold">Our Location</h2>
          <ul className="mt-4 leading-loose">
            <li>
              <a href="https://maps.app.goo.gl/bsW8pXVBxdGA8ZAYA" target="_blank">23150 Crenshaw Blvd #100<br />
                Torrance, CA 90505</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
