/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/vue-bag-admin/dist/**/*.{js,mjs,ts,tsx,vue}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
