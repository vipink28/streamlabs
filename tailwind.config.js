/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Patua One", serif'],
        'body': ['"Poppins", sans-serif'],
        'alternate': ['"Amita", serif']
      }
    },
  },
  plugins: [],
}
