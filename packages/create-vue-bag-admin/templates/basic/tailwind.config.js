/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/vue-bag-admin/dist/**/*.{js,mjs,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: 'var(--primary-color-400, #fb923c)',
          500: 'var(--primary-color, #f97316)',
          600: 'var(--primary-color-600, #ea580c)'
        },
        bag: {
          bg: 'var(--bag-color-bg, #fff7ed)',
          surface: 'var(--bag-color-surface, #ffffff)',
          muted: 'var(--bag-color-surface-muted, #f8fafc)',
          border: 'var(--bag-color-border, #e5e7eb)',
          text: 'var(--bag-color-text, #1e293b)'
        }
      }
    }
  },
  plugins: []
}
