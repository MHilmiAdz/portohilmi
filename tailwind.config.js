/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '10px 10px 10px rgba(0, 0, 0, 5)'
      }
    },
  },
  plugins: [],
}

