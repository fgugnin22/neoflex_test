/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { price: "#FFA542", main: "#1C1C27", secondary: "#838383", dark: "#101010", background: "#EAEAEA", rating: "#838383" },
      fontFamily: {
        'sans': "Montserrat, Arial, 'sans-serif'"
      },
      boxShadow: {
        default: '0px 0px 20px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}