/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "progress-bar": "shrinkProgress 4s linear forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        shrinkProgress: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
      },
    },
  },
  plugins: [],
};
