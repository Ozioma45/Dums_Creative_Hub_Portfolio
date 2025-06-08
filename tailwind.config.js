module.exports = {
  theme: {
    extend: {
      animation: {
        slide: "slide 25s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
};
