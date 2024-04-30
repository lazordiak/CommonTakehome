import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      flex: {
        "2": "2 2 0%",
      },
      colors: {
        transparent: "transparent",
        primary: "#4169E1",
        white: "#ffffff",
        secondary: "#8A2BE2",
        accentGreen: "#39FF14",
        accentOrange: "#FF4500",
        bgCharcoal: "#333333",
        bgGray: "#F0F0F0",
        black: "#000000",
        gray: "#808080",
      },
    },
  },
  plugins: [],
};
export default config;
