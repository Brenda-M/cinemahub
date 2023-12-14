/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 30px -15px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}