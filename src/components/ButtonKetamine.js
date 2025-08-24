// src/components/ButtonKetamine.js
import React from "react";

const variantStyles = {
  primary: `bg-blue-600 hover:bg-blue-700 text-white`,
  secondary: `bg-white hover:bg-blue-100 text-blue-600 hover:text-blue-700`,
};
const sizes = {
  default: `py-4 px-10`,
  lg: `py-5 px-14`,
  xl: `py-6 px-20 text-lg`,
};

const ButtonKetamine = ({
  children,
  className = "",
  size,
  variant = "primary",
  href = "https://pacificpaingroup.com/form/ketamine-assessment",
  cta = "assessment-cta",
  section = "generic",
}) => {
  const buttonClassNames = `
    ${sizes[size] || sizes.default}
    ${className}
    ${variantStyles[variant]}
    rounded-full font-semibold transition-colors duration-300 mt-6 px-8
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

export default ButtonKetamine;
