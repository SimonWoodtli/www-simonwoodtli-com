/** @type {import('tailwindcss').Config} */

//const colors = require('tailwindcss/colors')

module.exports = {
  content: ["content/**/*.md", "./layouts/**/*.html"],
  safelist: ['theme-dark', 'translate-x-0' ],
  theme: {
    extend: {
      colors: {
        'regular': 'rgb(var(--color-text-regular) / <alpha-value>)',
        'inverted': 'rgb(var(--color-text-inverted) / <alpha-value>)',
        'muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
        'accent': 'rgb(var(--color-text-accent) / <alpha-value>)',
        'ringgray': 'rgb(var(--color-text-ringgray) / <alpha-value>)',
        'primary': 'rgb(var(--color-bg-primary) / <alpha-value>)',
        'secondary': 'rgb(var(--color-bg-secondary) / <alpha-value>)',
        'tertiary': 'rgb(var(--color-bg-tertiary) / <alpha-value>)'
      }
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    'prettier-plugin-tailwindcss',
  ],
};
