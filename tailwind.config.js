module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: theme => ({
      ...theme('colors'),
      'blue-1000': '#012A69',
      'blue-1100': '#00183D',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
