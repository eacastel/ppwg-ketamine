import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size }) => {
  const buttonClassNames = `
    ${sizes[size] || sizes.default}
    ${className}
    bg-primary
    hover:bg-primary-darker
    rounded
    text-white
    font-medium
  `;
  
  const href = "https://secure.emerchantgateway.com/pay/4nkt6v4f7gnr07xy8/wsChATc9?dl=0"; 
  
  return (
    <a 
      href={href} 
      className={buttonClassNames}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default Button;
