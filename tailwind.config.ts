import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          950: "#000000",
          900: "#0a0a0a",
          800: "#171717",
          700: "#262626",
          600: "#404040",
        },
        accent: {
          blue: "#3b82f6",
          "blue-light": "#60a5fa",
          "blue-dark": "#2563eb",
        },
        text: {
          primary: "#fafafa",
          secondary: "#a3a3a3",
          muted: "#525252",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
