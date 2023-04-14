/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        layout: '5% 1fr 5%',
      },
      gridTemplateRows: {
        layout: '5% 1fr 5%',
        section: '10rem 1fr 25rem',
      },
      colors: {
        'soft-white': '#F6F4F3',
        dark: '#020202',
      },
    },

    fontFamily: {
      main: 'Montserrat , sans-serif ',
      second: 'Open Sans, sans-serif',
    },
  },
  plugins: [],
};
