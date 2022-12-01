/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    colors: {
      grey: "#0f1524",
      blue: "#7dd8ff",
      "blue-dark": "#349dca",
    },
    extend: {
      text: {
        "2xs": "0.55rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
