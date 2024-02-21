import React from 'react';

const ButtonKetamine = ({ children, className = '', size, variant = 'primary' }) => {
  // Define variant styles
  const variantStyles = {
    primary: `bg-blue-600 hover:bg-blue-700 text-white`,
    secondary: `bg-white hover:bg-blue-100 text-blue-600 hover:text-blue-700`,
  };

  // Adjusted button sizes for a more proportional increase
  const sizes = {
    default: `py-4 px-10`, // Adjusted for a larger default size
    lg: `py-5 px-14`, // Larger than default
    xl: `py-6 px-20 text-lg`, // Even larger with larger text
  };

  const buttonClassNames = `
    ${sizes[size] || sizes.default}
    ${className}
    ${variantStyles[variant]}
    rounded-full
    font-semibold
    transition-colors duration-300
    mt-6
    px-8
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

export default ButtonKetamine;
