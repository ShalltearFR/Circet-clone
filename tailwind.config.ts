import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "480px",
        tablet: "550px",
        "big-tablet": "770px",
        laptop: "990px",
        desktop: "1240px",
      },
      colors: {
        primary: "white",
        secondary: "black",
        tertiary: "#667479", //gris
        accent: "#ef7f01", //orange
        commentary: "#fde2ba", //jaune pale
        background: "#1a171b", //BG par defaut - Noir
        "second-background": "#ebebec", //blanc-gris
        "third-background": "#1c1c1c", //Noir-gris
      },
      borderRadius: {
        'header': '0 15rem 15rem 0',
      }
    },
  },
  plugins: [],
};
export default config;
