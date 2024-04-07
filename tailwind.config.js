/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      protest: ["Protest Guerrilla", "sans-serif"],
      jost: ["Jost", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        "bg-primary": "#050505",
        accent: "#9C8EF4",
      },
    },
  },
  plugins: [],
};
