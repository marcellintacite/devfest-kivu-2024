/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      default: ["Geist Mono", "sans-serif"],
    },

    extend: {
      colors: {
        primary: {
          50: "#f0f0f0",
          100: "#1e1e1e",
          200: "#f8d8d8",
          300: "#f9ab00",
          400: "#fef6e0",
        },
      },
    },
  },
  plugins: [],
});
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
