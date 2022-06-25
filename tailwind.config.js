/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./template/**/*.ejs"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
