/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./layouts/**/*.{html,js}"],
  safelist: ['theme-dark'],
  theme: {
    extend: {
      gridTemplateColumns: {
        '4-big': '25rem 7rem minmax(12rem, 1fr) 7rem',
        '4-med': '19rem 4rem minmax(12rem, 1fr) 4rem',
        '3-big': '3.5rem minmax(12rem, 1fr) 3.5rem',
        '3-med': '1.75rem minmax(12rem, 1fr) 1.75rem'
      },
      colors: {
        'regular': 'rgb(var(--color-text-regular) / <alpha-value>)',
        'inverted': 'rgb(var(--color-text-inverted) / <alpha-value>)',
        'muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
        'accent': 'rgb(var(--color-text-accent) / <alpha-value>)',
        'primary': 'rgb(var(--color-bg-primary) / <alpha-value>)',
        'secondary': 'rgb(var(--color-bg-secondary) / <alpha-value>)',
        'tertiary': 'rgb(var(--color-bg-tertiary) / <alpha-value>)'
      }
    },
  },
  plugins: [],
};
