/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        peach: {
          50: '#fff5f0',
          100: '#ffe8dc',
          200: '#ffd0b9',
          300: '#ffb396',
          400: '#ff9573',
          500: '#ff7850',
          600: '#cc6040',
          700: '#994830',
          800: '#663020',
          900: '#331810',
        },
      },
    },
  },
  plugins: [],
};
