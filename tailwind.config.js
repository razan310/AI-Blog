/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: 'black', 
        text: '#98989A',       
        Black_15:'#262626',
        myYellow: '#FFD11A',
        myRed:'#FF5500',
     
      },
    },
    fontFamily: {
      Kumbh: ["Kumbh Sans", "sans-serif"],
      Inter: ["Inter", "serif"],
    },
    backgroundImage: {
      'linear-gradient': "linear-gradient(180deg, rgba(20, 20, 20, 0) -50.48%, #1a1a1a 98.11% )",
    },
  },
  plugins: [],
};
