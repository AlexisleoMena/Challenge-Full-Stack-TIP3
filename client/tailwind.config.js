/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    minHeight: {
      '1/2': '50%',
      '70vh': '70vh',
      '80vh': '80vh',
    },
    extend: {
      spacing: {
        '112': '28rem',
        '128': '32rem',
      },
      fontFamily: {
        'Oswald': ['Oswald', 'sans-serif']
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
