/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'coffee-black': '#6F4E37',
        'coffee-regular': '#A67B5B',
        'coffee-light': '#ECB176',
        'coffee-extra-light': '#FED8B1',
        'coffee-white': '#FFFFFF',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
