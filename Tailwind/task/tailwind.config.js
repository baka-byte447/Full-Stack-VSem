/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.html",
    "./src/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "coffee-roasted": "#704341",
        "coffee-normal": "#ababab",
      },
    },
  },
  plugins: [],
};