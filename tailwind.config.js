/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#505D4E",
        "dark-shade": "#23181D",
        "dark-accent": "#062041",
        "light-shade": "#6070B9",
        "black": "#0E1111",
        "white": "#ECE5E6",
      }
    },
  },
  plugins: [],
}

