module.exports = {
  theme: {
    extend: {
      animation: {
        slide: "slide 30s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        boxShadow: {
          "box-shadow": "0 10px 20px rgba(0, 0, 0, 0.2)",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
