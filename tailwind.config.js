/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary: '#DEEBFF',
        yellow: '#FFC400',
        secondary: '#F4F5F7',
        white: '#FFFFFF',
        blue: '#D5E3F8'
      }
    },
  },
  plugins: [],
}
