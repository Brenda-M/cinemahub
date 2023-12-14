/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '8': 'repeat(8, minmax(150px, 1fr))',
      }
    },
  },
  plugins: [],
}