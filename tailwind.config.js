/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screen:{
      xs:"480px",
      ss:"620px",
      sm:"768px",
      md:"1060px",
      lg:"1200px"
          },
    extend: {
      colors:{
        BrightRed: "hsl(12,88%,59%)",
        BrightRedLight: "hsl(12,88%,59%)",
        BrightRedSuperLight: "hsl(12,88%,95%)",
        darkBlue: "hsl(228,39%,23%)",
        DarkGraylishBlue: "hsl(127,12%,13%)",
        veryDarkBlue: "hsl(233,12%,13%)",
        veryPalRed: "hsl(13,100%,96%)",
        veryLightGray: "hsl(0,0%,98%)",
      }
    },
  },
  plugins: [],
}

