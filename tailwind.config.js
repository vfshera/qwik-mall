/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      colors: {
        brand: {
          1: "#1f83cf",
          2: "#96ef87",
          3: "#f3f5f6",
          4: "#677279",
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        cart: "cart 5s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },

          "50%": { transform: "rotate(3deg)" },
        },

        cart: {
          "0%": { transform: "translateX(-600%)", opacity: "0" },
          "5%": { transform: "translateX(-450%)", opacity: "0.5" },
          "25%": { transform: "translateX(30%)", opacity: "1" },
        },
      },
    },

    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
    ],
  },
  variants: {
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    animation: ["hover", "focus"],
  },
};
