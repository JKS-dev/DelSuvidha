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
          "100": "#C4CBD0",
          "200": "#9F9BA2",
          "300": "#7A7B8B",
          "400": "#545A74",
          "500": "#31363F",
          "600": "#2B2F36",
          "700": "#24272E",
          "800": "#1E1F26",
          "900": "#181A1F",
          "1000": "#121416"
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
