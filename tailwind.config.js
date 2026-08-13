/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        script: ['"Great Vibes"', '"Alex Brush"', '"Cookie"', '"Rochester"', 'cursive'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        darkbg: {
          950: '#02050d',
          900: '#030712',
          850: '#060b18',
          800: '#0a1022',
          750: '#0f172a',
          700: '#172033',
        }
      },
      boxShadow: {
        'glow-blue': '0 0 35px -5px rgba(59, 130, 246, 0.45)',
        'glow-purple': '0 0 35px -5px rgba(168, 85, 247, 0.45)',
      },
    },
  },
  plugins: [],
}