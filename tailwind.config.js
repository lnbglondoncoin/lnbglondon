/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgray: "#c3c9d4",
        gray2: "#a1abbd",
        primary: "#ffba00",
        secondary: "#16181d",
        danger: "#ff3133",
        warning: "8dc647",
        darkgray: "#666d7a",
      },
    },
  },
  plugins: [],
};
