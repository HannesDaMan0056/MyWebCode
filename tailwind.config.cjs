const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f4f9',
          100: '#cce9f3',
          200: '#99d3e7',
          300: '#66bddb',
          400: '#33a7cf',
          500: '#1c8cbc',
          600: '#1c8cbc',
          700: '#176f96',
          800: '#125370',
          900: '#0d364a',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'Montserrat', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },

  plugins: [
    require("flowbite/plugin"),
    require("flowbite-typography"),
  ],
  darkMode: "class",
};

module.exports = config;
