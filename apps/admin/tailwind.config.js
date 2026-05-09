/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    '../../packages/*/src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: 'var(--primary-color-400, #fb923c)',
          500: 'var(--primary-color, #f97316)',
          600: 'var(--primary-color-600, #ea580c)'
        }
      }
    }
  },
  plugins: []
}
