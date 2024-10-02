/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0F62FE",
        secondary: "#F3F5F6",
        altPrimary: "#D2D5DC",
        whiteColor: "#FFFFFF",
        black: "#161616",
        greyColor: "#E4E4E4",
        lightblue: "#A878E6",
        surface: {
          100: "#121212",
          200: "#282828",
          300: "#3f3f3f",
          400: "#575757",
        },
      },
    },

    fontFamily: {
      sans: ["Inter", "sans-serif"],

      // Add more font families as needed
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
