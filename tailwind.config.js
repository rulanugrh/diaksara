/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        sage: '#B5C18E',
        earth: '#C7B7A3',
        grey: '#C7B7A3',
        beige: '#EADBC8',
        darkGreen: '#1A4D2E',
        lightGreen: '#4F6F52',
        darkCream: '#E8DFCA',
        lightCream: '#F5EFE6'
      },
      container: {
        center: true,
        padding: "16px"
      },
      fontFamily: {
        roboto: "'Roboto Mono', monospace",
        rubik: "'Rubik', sans-serif"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

