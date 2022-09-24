/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Backend/views/html/*.ejs", "./Backend/views/templates/*.ejs"],
  theme: {
    colors: {
      "themeColor": "#588157",
      "white": "#fff"
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
