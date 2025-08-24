import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size, phoneNumber }) => {
  const buttonClassNames = `
    ${sizes[size] || sizes.default}
    ${className}
    bg-red-300
    hover:bg-red-400
    rounded
    text-gray-700
    hover:text-red-300
    ml-4
    font-medium
  `;

  // Using tel: protocol for phone number links
  const href = phoneNumber ? `tel:${phoneNumber}` : '#';

  return (
    <a 
      href={href} 
      className={buttonClassNames}
      target="_blank"
      rel="noopener noreferrer"
      onClick={sendGoogleTagEvent}
    >
      {children}
    </a>
  );
};

export default Button;