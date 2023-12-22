/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      yekanReg: ["yekanReg", "sans-serif"],
      yekanBold: ["yekanBold", "sans-serif"],
      yekanExtraBold: ["yekanExtraBold", "sans-serif"],
      yekanSemiBold: ["yekanSemiBold", "sans-serif"],
    },
  },
  plugins: [],
};
