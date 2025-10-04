/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#80df20",
        "background-light": "#f7f8f6",
        "background-dark": "#192111",
      },
      fontFamily: {
        display: ["Newsreader", "serif"],
      },
      borderRadius: { 
        DEFAULT: "0.5rem", 
        lg: "1rem", 
        xl: "1.5rem", 
        full: "9999px" 
      },
    },
  },
  plugins: [],
}