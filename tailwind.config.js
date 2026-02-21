/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#f97316',
        'accent-secondary': '#6366f1',
        'accent-glow': 'rgba(249,115,22,0.3)',
        surface: '#111111',
        'surface-2': '#1a1a1a',
        border: '#1e293b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
