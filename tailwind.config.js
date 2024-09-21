/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to left, #002730, #004b54)',
      },
      colors: {
        'light-blue': '#004b54', // Lighter shade for hover
        'lighter-blue': '#006c73', // Even lighter shade for background
      },
    },
  },
  plugins: [],
}
