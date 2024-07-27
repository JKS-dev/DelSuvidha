/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@nextui-org/theme/dist/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:"var(--primary)",
        Primary: {
          100: '#E4E9EE',
          200: '#B8C4D1',
          300: '#8D9FB4',
          400: '#627A97',
          500: "var(--primary)", 
          600: '#24384A',
          700: '#1B2D3E',
          800: '#121C24',
          900: '#0A0F14',
        },
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        background: "var(--background)",
        white: "var(--white)",
        text: "var(--text)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        background: "var(--background)",
        white: "var(--white)",
        text: "var(--text)",
        },
      },
    },
  })],
};
