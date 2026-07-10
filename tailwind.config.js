/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Dancing Script", "cursive"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        wool: {
          50: "#FBF7F1",
          100: "#F3E9DA",
          200: "#E6D2B4",
          300: "#D6B686",
          400: "#C9A472",
          500: "#B98A55",
          600: "#9C6F42",
        },
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "20%": { transform: "translate(3%, 2%)" },
          "30%": { transform: "translate(-1%, 3%)" },
          "40%": { transform: "translate(2%, -2%)" },
          "50%": { transform: "translate(-3%, 1%)" },
          "60%": { transform: "translate(1%, -3%)" },
          "70%": { transform: "translate(-2%, 2%)" },
          "80%": { transform: "translate(3%, -1%)" },
          "90%": { transform: "translate(-1%, -2%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        grain: "grain 8s steps(10) infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
      },
    },
  },
  plugins: [],
}

