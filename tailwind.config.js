module.exports = {
  purge: [
    './pages/**/*.{jsx,tsx}',
    './components/**/*.{jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
