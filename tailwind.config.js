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
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xls: "1400px",
      "2xl": "1536px",
      "3xl": "1750px",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
