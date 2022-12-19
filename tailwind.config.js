/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // darkMode: false, // or 'media' or 'class'
  content: [
    './public/index.html',
    './src/**/*.{html,js,vue}'
  ],
  theme: {
    extend: {}
  },
  variants: {
    extend: {},
  },
  plugins: []
}
