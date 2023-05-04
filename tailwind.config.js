/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      // xxl: "1500px",
    },
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        alata: ["Alata"],
        WorkSans: ["Work Sans"],
      },
      letterSpacing: {
        widest: ".3em",
      },
      backgroundColor: {
        backgroundColor: "#35AFBF",
        "bg-hero": "#F3FEFF",
        vide: "#10292DC2",
        footer: "#2C353E",
        button: "#35AFBF",
      },
      backgroundImage: {
        hero: "url('../images/Background.png')",
        Image: "url('../images/Feature01.png')",
        Testimon: "url('../images/Testimonial.png')",
        vidio: "url('../images/Video1.png')",
      },
      backgroundSize: {
        backgroundSize: " 60%;",
        backgroundSize1: " 100%;",
        backgroundSize2: " cover",
      },
      textColor: {
        textColor: "#32A3B2",
        textarey: "#707273",
      },
    },
  },
  plugins: [],
};
