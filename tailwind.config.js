/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "black",
        text: "#98989A",
        Black_15: "#262626",
        myYellow: "#FFD11A",
        myRed: "#FF5500",
        myGray: "#666666",
      },
      fontFamily: {
        Kumbh: ["Kumbh Sans", "sans-serif"],
        Inter: ["Inter", "serif"],
      },
      spacing: {
        15: "60px", 
      },
    },
  },
  plugins: [],
};
