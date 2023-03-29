/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
        poppins: "Poppins",
      },
      screens: {
        sm: "375px",
        md: "412px",
        lg: "667px",
        xl: "768px",
      },
      boxShadow: {
        shadow: "0 5px 5px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
