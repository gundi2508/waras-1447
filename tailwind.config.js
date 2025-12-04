module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ['"Great Vibes"', "cursive"],
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        romantic: "#f9a8c9",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 9s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
          "100%": { transform: "translateY(0)" },
        },
        floatSlow: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-28px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
