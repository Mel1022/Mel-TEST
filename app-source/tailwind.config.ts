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
          DEFAULT: "#146B4D",
          light: "#2E8B62",
          dark: "#0B3D2E",
        },
        gold: {
          DEFAULT: "#D4A62A",
          light: "#E4BE55",
          dark: "#B08A1E",
        },
        steel: {
          DEFAULT: "#5A7068",
          light: "#7A9088",
        },
        surface: "#EBF7F1",
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "system-ui", "sans-serif"],
        body: ["var(--font-dmsans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 30px -12px rgba(11, 61, 46, 0.18)",
        cardHover: "0 16px 40px -14px rgba(11, 61, 46, 0.28)",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
