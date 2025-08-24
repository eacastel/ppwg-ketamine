// src/components/Button.js
import React from "react";

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`,
};

const Button = ({
  children,
  className = "",
  size,
  // Defaults to your Drupal form; adjust if needed
  href = "https://pacificpaingroup.com/form/ketamine-assessment",
  cta = "assessment-cta",
  section = "generic",
}) => {
  const buttonClassNames = `
    ${sizes[size] || sizes.default}
    ${className}
    bg-primary hover:bg-primary-darker
    rounded text-white font-medium
  `;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClassNames}
      data-cta={cta}
      data-section={section}
    >
      {children}
    </a>
  );
};

export default Button;
