/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // darkMode: false, // or 'media' or 'class'
  corePlugins: {
    preflight: false // naiveui和tailwin样式冲突导致n-button背景成透明问题解决方法
  },
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
