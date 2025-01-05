/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1', // Indigo/violet
          light: '#818cf8',
          dark: '#4f46e5',
        },
        secondary: {
          DEFAULT: '#f472b6', // Rose
          light: '#f9a8d4',
          dark: '#ec4899',
        },
        background: '#f8fafc',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};