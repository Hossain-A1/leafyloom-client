import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,

      padding: {
        DEFAULT: "1rem",
      md: "2rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark: "#333333",
        light: "#FFFFFF",
        hero_bg:"#F1F5F4",
        btn_bg:"#586F69",
        green: "#6E9945",
        danger: "#E72929",
        orange: "#FF7A3D",
        red: "#B40003",
      },
    },
  },
  plugins: [],
};
export default config;