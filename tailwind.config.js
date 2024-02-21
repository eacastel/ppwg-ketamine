module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/hero-slider3.jpg')",
      },
      // Custom background sizes
      backgroundSize: {
        'full': '100%', // Use 'full' for 100% background size
      },
      // Custom background positions
      backgroundPosition: {
        'custom-small': 'center left', // Custom position for small screens
        'custom-large': 'center center', // Custom position for medium and large screens
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], // Add this line
      },
      colors: {
        primary: {
          lighter: 'hsl(207, 73%, 52%)',
          default: 'hsl(207, 73%, 57%)',
          darker: 'hsl(207, 73%, 44%)'
        }
      }
    }
  },
  variants: {},
  plugins: []
};
