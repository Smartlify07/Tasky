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
        "yellow-1000": "#f0f600",
        "pink-1000": "#ff3cc7",
        "purple-1000": "#4c1a57",
        "cyan-1000": "#00e5e8",
        skobeloff: "#007c77",
      },

      animation: {
        roam: "roam  ease-in 10s infinite reverse both",
        rotate: "rotate ease-in 10s infinite reverse both",
      },

      keyframes: {
        roam: {
          "50%": {
            left: "50%",
            top: "50%%",
            rotate: "50deg",
          },

          "60%": {
            left: "50%",
            top: "60%",
            rotate: "75deg",
          },
        },

        rotate: {
          "50%": {
            right: "10%",
            bottom: "0%",
            rotate: "45deg",
          },

          "75%": {
            right: "40%",
            rotate: "60deg",
          },

          "100%": {
            right: "100%",
            rotate: "90deg",
          },
        },
      },
    },
  },
  plugins: [],
};
