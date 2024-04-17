/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      padding: '2rem',
      center: true
    },
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1280px'
    }
  },
  plugins: []
}
