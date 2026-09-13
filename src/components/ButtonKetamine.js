import React from 'react';
export const CONSULTATION_URL = 'https://intake.pacificpaingroup.com/private-consultation-request';
const ButtonKetamine = ({
  children = 'Request a Ketamine Consultation',
  className = '',
  variant = 'primary',
  href = CONSULTATION_URL,
  section = 'generic',
}) => (
  <a
    href={href}
    className={`ketamine-button ketamine-button--${variant} ${className}`}
    data-service="ketamine"
    data-cta="consultation-cta"
    data-section={section}
  >
    {children}
  </a>
);
export default ButtonKetamine;
