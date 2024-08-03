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
        primary: "#f0f4f1",
        secondary: "#9da69f",
        tertiary: "#565d56",
        "tertiary-2": "#c5cdc7",
        dark: "#383b39",
      },
    },
  },
  plugins: [],
};
