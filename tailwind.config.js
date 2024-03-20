/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // ctabg: "url('./src/assets/images/Cta/ctabg.png')",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        btnPrimary: "#FA8B02",
      },
    },
  },
  plugins: [],
};
