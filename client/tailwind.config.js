/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mf: '990px'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
