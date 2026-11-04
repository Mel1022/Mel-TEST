import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#04141f",
        graphite: "#082133",
        panel: "#0d2d45",
        accent: { DEFAULT: "#e36e02", dim: "#b85900" },
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
