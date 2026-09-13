import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const locations = [
  {
    name: 'Torrance',
    key: 'torrance',
    street: '23150 Crenshaw Blvd, Suite 100',
    city: 'Torrance, CA 90505',
  },
  {
    name: 'Manhattan Beach',
    key: 'manhattan-beach',
    street: '2809 N Sepulveda Blvd, Suite C',
    city: 'Manhattan Beach, CA 90266-2727',
  },
];
const profiles = [
  ['Google Business', 'google', 'https://share.google/DWStgDLcVWZOzbETj'],
  ['Yelp', 'yelp', 'https://www.yelp.com/biz/pacific-pain-and-wellness-group-torrance-2'],
  ['Facebook', 'facebook', 'https://www.facebook.com/Pacificpaingroup'],
  ['Instagram', 'instagram', 'https://www.instagram.com/pacificpaingroup/'],
  ['LinkedIn', 'linkedin', 'https://www.linkedin.com/company/pacific-pain-and-wellness-group/'],
];
export const KetamineLocations = () => (
  <section id="location" className="ketamine-locations" aria-labelledby="location-title">
    <div className="ketamine-container">
      <div className="ketamine-location-heading">
        <h2 id="location-title">Our South Bay Locations</h2>
        <p>
          Visit Pacific Pain & Wellness Group in Torrance or Manhattan Beach. Our team will confirm
          the location for your ketamine appointment.
        </p>
        <a
          href="tel:+13104377399"
          className="ketamine-footer-phone"
          data-cta="call-cta"
          data-service="ketamine"
          data-section="footer"
        >
          Call (310) 437-7399
        </a>
      </div>
      <div className="ketamine-location-grid">
        {locations.map((location) => {
          const address = `${location.street}, ${location.city}`;
          return (
            <article className="ketamine-location-card" key={location.key}>
              <div className="ketamine-location-copy">
                <h3>{location.name}</h3>
                <address>
                  {location.street}
                  <br />
                  {location.city}
                </address>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="directions-cta"
                  data-service="ketamine"
                  data-section="footer"
                  data-destination={location.key}
                >
                  Get directions →
                </a>
              </div>
              <iframe
                title={`Map of Pacific Pain & Wellness Group in ${location.name}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer"
                allowFullScreen
              />
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

const FooterKetamine = () => (
  <footer id="site-footer" className="ketamine-footer">
    <div className="ketamine-container">
      <div className="ketamine-footer-bottom">
        <div>
          <StaticImage
            src="../../images/ppwg-logo.png"
            alt="Pacific Pain & Wellness Group"
            width={220}
            className="ketamine-footer-logo"
          />
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
        <div className="ketamine-certification">
          <h2>Trusted & Certified</h2>
          <a
            href="https://www.legitscript.com/websites/?checker_keywords=pacificpaingroup.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Verify LegitScript approval for pacificpaingroup.com"
            data-cta="trust-cta"
            data-service="ketamine"
            data-section="footer"
            data-destination="legitscript"
          >
            <img
              src="https://static.legitscript.com/seals/5280196.png"
              alt="Verify LegitScript approval for pacificpaingroup.com"
              width="73"
              height="79"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </a>
        </div>
        <div className="ketamine-profiles">
          <h2>Connect with PPWG</h2>
          <div className="ketamine-social-links">
            {profiles.map(([name, key, href]) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Pacific Pain & Wellness on ${name}`}
                title={name}
                data-cta="profile-cta"
                data-service="ketamine"
                data-section="footer"
                data-destination={key}
              >
                <img src={`/brand/${key}.svg`} alt="" width="25" height="25" loading="lazy" />
              </a>
            ))}
          </div>
          <a
            className="ketamine-psychology"
            href="https://www.psychologytoday.com/profile/874181"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pacific Pain & Wellness on Psychology Today"
            data-cta="profile-cta"
            data-service="ketamine"
            data-section="footer"
            data-destination="psychology-today"
          >
            <img
              src="/brand/psychology-today.svg"
              alt="Psychology Today"
              width="175"
              height="35"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
export default FooterKetamine;
