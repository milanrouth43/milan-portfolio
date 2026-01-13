/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // <--- THIS IS THE MAGIC LINE
  theme: {
    extend: {},
  },
  plugins: [],
}