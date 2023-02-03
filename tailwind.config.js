/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: "'Ubuntu', sans-serif",
        satisfy: "'Satisfy', cursive",
        yanone: "'Yanone Kaffeesatz', sans-serif"
      }
    },
  },
  plugins: [],
}
