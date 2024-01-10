import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "580px",
      md: "780px",
      lg: "990px",
      xl: "1240px",
    },
    extend: {
      colors: {
        primary: "white",
        secondary: "black",
        tertiary: "#667479", //gris
        accent: "#ef7f01", //orange
        commentary: "#fde2ba", //jaune pale
        background: "#1a171b", //BG par defaut - Noir
        "second-background": "#ebebec", //blanc-gris
        "third-background": "#1c1c1c", //Noir-gris
        "fourth-background": "#222", //Dark gray
      },
      borderRadius: {
        'header': '0 15rem 15rem 0',
      }
    },
    boxShadow: {
      'carousel': '0.8rem 0.4rem 0 #f17d00',
    }
  },
  plugins: []
});

export default config;
