/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        're': '#cc241d',
        'lightre': '#fb4934',
        'gr': '#98971a',
        'lightgr': '#b8bb26',
        'ye': '#d79921',
        'lightye': '#fabd2f',
        'ble': '#458588',
        'lightbl': '#83a598',
        'pu': '#b16286',
        'lightpu': '#d3869b',
        'aq': '#689d6a',
        'lightaq': '#8ec07c',
        'or': '#d65d0e',
        'lightor': '#fe8019',
        'bl': {
          400: '#928374',
          500: '#7c6f64',
          600: '#665c54',
          700: '#504945',
          800: '#3c3836',
          900: '#282828',
          950: '#1d2021'
        },
        'wh': {
          700: '#fbf1c7',
          800: '#ebdbb2',
          900: '#d5c4a1',
          950: '#bdae93'
        },
        'grey': {
          700: '#d5c4a1',
          800: '#bdae93',
          900: '#a89984',
          950: '#928374'
        }
      }
    },
  },
  plugins: [],
};
