/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "./public/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern-gradient': "linear-gradient(to bottom, rgba(15, 23, 41, 1) , rgba(0,0,0,0)),url('https://astro.build/assets/bg-grid.png')",
        'grid-pattern-solid': "url('https://astro.build/assets/bg-grid.png')"
      }
    },
  },
  plugins: [require("daisyui"),
  require('@tailwindcss/typography'),],

  daisyui: {
    themes: ["night"],
  },
};
