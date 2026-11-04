import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#06080a",
        graphite: "#0f1316",
        panel: "#151a1e",
        lime: { DEFAULT: "#c8ff2e", dim: "#9fd41a" },
        silver: { DEFAULT: "#aeb7b3", dim: "#6f7a76" },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
