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
        blue: '#D5E3F8',
        bluish: '#172B4D',
        rblue: '#0052CC',
        gray: '#F4F5F7',
        green: '#006644'
      }
    },
  },
  plugins: [],
}
