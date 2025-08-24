// src/components/CallButton.js
import React from "react";

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`,
};

const CallButton = ({
  children,
  className = "",
  size,
  phoneNumber = "+13104377399",
  cta = "call-cta",
  section = "generic",
}) => {
  const buttonClassNames = `
    ${sizes[size] || sizes.default}
    ${className}
    bg-red-300 hover:bg-red-400
    rounded text-gray-700 hover:text-red-300 ml-4 font-medium
  `;

  return (
    <a
      href={`tel:${phoneNumber}`}
      className={buttonClassNames}
      data-cta={cta}
      data-section={section}
      aria-label={`Call ${phoneNumber}`}
    >
      {children}
    </a>
  );
};

export default CallButton;
