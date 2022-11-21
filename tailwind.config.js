/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      text: {
        '2xs': '0.55rem',
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
