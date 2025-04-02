/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          600: '#EA580C',
          700: '#C2410C',
        },
        red: {
          600: '#DC2626',
          700: '#B91C1C',
        },
      },
    },
  },
  plugins: [],
};