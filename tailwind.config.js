/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth:{
      container:"1440px",
      contentContainer:"1140px",
      containerSmall:"1024px",
      containerxs:"768px",
    },
    extend: {
      screens:{
        xs:"320px",
        sm:"375px",
        sml:"500px",
        md:"667px",
        mdl:"768px",
        lg:"960px",
        lgl:"1024px",
        xl:"1280px",
      },
      fontFamily:{
        bodyFont:["Montserrat","sans-serif"],
        titleFont:["Inter","sans-serif"],
        signature: ['agustina', 'sans-serif'],
      },
      // boxShadow:{
      //   navbarShadow:"0 10px 30px -10px rgba(2,12,27,0.7)"
      // },
      colors:{
        // bodyColor:"#0e172b",
        // bodyColor:"#0A192F",
        bodyColor:"#FFFFFF",
        // textGreen:"#64ffda",
        // textGreen:"#09224b",
        textGreen:"#2f98ca",
        // textLight:"#e3e8f1",
        textLight:"#09224b",
        // textDark:"#95a2b8",
        textDark:"#82cbfa",
        hoverColor:"rgba(100,255,218,0.1)",
      },
    },
  },
  plugins: [],
}

