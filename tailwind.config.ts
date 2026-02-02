import type { Config } from "tailwindcss";

const config: Config = { 
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins", "sans-serif"],
      },
      colors: {
        kaki: "#6B8E23",
        smaragd: "#01D758",
      },
    },
  },
  plugins: [],
};

export default config;
