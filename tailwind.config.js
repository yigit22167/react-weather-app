/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
      colors: {
        white: "white",
        black: "black",
        background: "#5498f2",
        container: "#66a4f3",
        borderColor: "#73b2f5",
        textColor: "#8fc3f7",
        buttonText: "#4475ef",
        transparent: "transparent",
        placeholder: "#d2dde8",
      },
    },
  },
  plugins: [],
};
