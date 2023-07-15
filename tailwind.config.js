const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6741d9",
        primaryLight: "#7950f2",
        text: "#dee2e6",
        textDark: "#adb5bd",
        background100: "#343a40",
        background500: "#2b3035",
        background900: "#212529",
        red: "#fa5252",
        redDark: "#e03131",
      },
    },
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Open Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
    dropShadow: {
      sm: "0 24px 24px rgba(0, 0, 0, 0.1)",
    },
  },
  plugins: [],
};
