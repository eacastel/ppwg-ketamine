import React from 'react';
export const ASSESSMENT_URL = 'https://intake.pacificpaingroup.com/ketamine-assessment';
const ButtonKetamine = ({
  children = 'Take the assessment',
  className = '',
  variant = 'primary',
  href = ASSESSMENT_URL,
  section = 'generic',
}) => (
  <a
    href={href}
    referrerPolicy="no-referrer"
    className={`ketamine-button ketamine-button--${variant} ${className}`}
    data-service="ketamine"
    data-cta="assessment-cta"
    data-section={section}
  >
    {children}
  </a>
);
export default ButtonKetamine;
