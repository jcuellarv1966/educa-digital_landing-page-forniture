/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Candara",
      secondary: "Calibri",
    },
    container: {
      padding: {
        DEFAULT: "1.5rem",
        // lg: '3rem',
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: {
          100: "#a5ffce",
          200: "#4ae290",
          300: "25c870",
        },
        neutral: {
          100: "#ffffff",
          200: "#dedee3",
          300: "#9797a1",
          400: "#595962",
          500: "#131316",
        },
        accent: "#286F6C",
        grey: {
          DEFAULT: "#919297",
          1: "#D9D9D9",
          2: "#E7E9EB",
          3: "#F5F5F5",
        },
        white: "#fff",
        pink: "pink",
      },
      backgroundImage: {
        hero: 'url("/src/assets/img/hero-bg_3.jpg")',
        newsletter: 'url("/src/assets/img/newsletter2.jpg")',
      },
      dropShadow: {
        primary: "0px 4px 10px rgba(15, 27, 51, 0.05);",
      },
    },
  },
  plugins: [],
};
