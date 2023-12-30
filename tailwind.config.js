/** @type {import('tailwindcss').Config} */

//const colors = require('tailwindcss/colors')

module.exports = {
  content: ["content/**/*.md", "./layouts/**/*.html"],
  safelist: ['theme-dark', 'translate-x-0', 'bottom-0', 'blur', 'outline-black', 'mt-2', 'justify-center', '2xl:w-[calc(100%/3-0.1875rem)]', 'lg:flex-row', 'lg:order-last' ],
  theme: {
    extend: {
      colors: {
        'regular': 'rgb(var(--color-text-regular) / <alpha-value>)',
        'white': 'rgb(var(--color-text-white) / <alpha-value>)',
        'inverted': 'rgb(var(--color-text-inverted) / <alpha-value>)',
        'muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
        'accent': 'rgb(var(--color-text-accent) / <alpha-value>)',
        'imgOutline': 'rgb(var(--color-img-outline) / <alpha-value>)',
        'primary': 'rgb(var(--color-bg-primary) / <alpha-value>)',
        'secondary': 'rgb(var(--color-bg-secondary) / <alpha-value>)',
        'tertiary': 'rgb(var(--color-bg-tertiary) / <alpha-value>)',
        'quaternary': 'rgb(var(--color-bg-quaternary) / <alpha-value>)'
      },
      screens: {
        '9x': '900px',
        'xs': '376px'
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    'prettier-plugin-tailwindcss',
  ],
};
