import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#142B4A",
          light: "#1E3A5F",
          dark: "#0D1F36",
        },
        gold: {
          DEFAULT: "#D4A62A",
          light: "#E4BE55",
          dark: "#B08A1E",
        },
        steel: {
          DEFAULT: "#66717C",
          light: "#8A939C",
        },
        surface: "#F5F7FA",
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 30px -12px rgba(20, 43, 74, 0.18)",
        cardHover: "0 16px 40px -14px rgba(20, 43, 74, 0.28)",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
