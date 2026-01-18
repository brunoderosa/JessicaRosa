/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rose': {
          soft: 'rgb(var(--color-rose-soft) / <alpha-value>)',
          primary: 'rgb(var(--color-rose-primary) / <alpha-value>)',
          dark: 'rgb(var(--color-rose-dark) / <alpha-value>)',
          light: 'rgb(var(--color-rose-light) / <alpha-value>)',
        },
        'text': {
          main: 'rgb(var(--color-text-main) / <alpha-value>)',
          muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
};
