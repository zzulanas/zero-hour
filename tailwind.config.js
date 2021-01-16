const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      zhblue: {
        light: '#A1E8FF',
        DEFAULT: '00C0FE',
        dark: '#008BB8'
      },
      black: colors.black,
      white: colors.white,
      zhorange:{
        light: '#FFAC92',
        DEFAULT: '#FE3E00',
        dark: '#A92900'
      },
      pink: colors.pink,
      red: colors.red,
      gray: colors.coolGray,
      green: colors.green,
      yellow: colors.amber,
      purple: colors.fuchsia
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
