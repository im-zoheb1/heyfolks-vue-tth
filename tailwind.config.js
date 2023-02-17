/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5372EB',
        'secondary': '#7C3AED',
        'accent': '#34D399',
        'light-1': '#EFF6FF',
        'light-2': '#DBEAFE',
        'danger': '#DC0000',
        'muted': '#999999'
      },
      backgroundImage: {
        'folks': `linear-gradient(to right bottom, rgba(59, 130, 246, 0.5), rgba(124, 58, 237, 0.3)), url('@/assets/img/folks-bg.png')`
      },
      fontFamily: {
        'logo': "'Anton', sans-serif",
      },
      zIndex: {
        'header': 1000,
        'sidenav': 2000,
        'header-tab': 3000,
        'popover': 4000,
        'dialog': 10000
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
