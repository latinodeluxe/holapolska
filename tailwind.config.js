/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#16213E', light: '#243459' },
        cream: '#FFF8EE',
        mango: { DEFAULT: '#F4A300', light: '#FFF1DC' },
        magenta: { DEFAULT: '#E0447B', light: '#FDE9F0' },
        teal: { DEFAULT: '#0F9B8E', light: '#E4F5F3' },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
