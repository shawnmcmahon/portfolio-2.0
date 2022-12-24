/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ["Calibre","Inter","San Francisco","SF Pro Text"], 
      'mono': ["SF Mono","Fira Code","Fira Mono","Roboto Mono"]
    },
    extend: {
    },
  },
  plugins: [],
}
