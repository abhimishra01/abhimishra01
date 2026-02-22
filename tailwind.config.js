/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#8b5cf6',
        'accent-secondary': '#6366f1',
        'accent-glow': 'rgba(139,92,246,0.3)',
        surface: '#111118',
        'surface-2': '#1a1825',
        border: 'rgba(139,92,246,0.15)',
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
