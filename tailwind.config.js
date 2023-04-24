/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "sans": ['Source Sans Pro', 'sans-serif', 'Helvetica'],
      "serif": ['Source serif Pro', 'serif', 'Times New Roman'],
    },
    extend: {
      colors: {
        "main": "#505D4E",
        "dark-shade": "#23181D",
        "dark-accent": "#062041",
        "light-shade-500": "#6070B9",
        "light-shade-400": "#707ec0",
        "light-shade-300": "#808dc7",
        "light-shade-200": "#909bce",
        "light-shade-100": "#a0a9d5",
        "black": "#0E1111",
        "white": "#ECE5E6",
      },
      dropShadow: {
        "lg-black": '5px 5px 0 rgb(0 0 0 / 0.7)'
      },
      content: {
        'aboutIcon': 'url("/svg/navIcons/aboutIcon.svg")',
      }
    },
  },
  plugins: [],
}

