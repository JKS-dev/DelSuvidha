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
        primary:"#31363F",
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
        secondary: "#3B82F6",
        accent: "#10B981",
        background: "#222831",
        white: "#FFFFFF",
        text: "#DDE6ED",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          primary:"#31363F",
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
          secondary: "#3B82F6",
          accent: "#10B981",
          background: "#222831",
          white: "#FFFFFF",
          text: "#DDE6ED",
        },
      },
    },
  })],
};
