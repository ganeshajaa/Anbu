import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        onyx: "#14100C",
        espresso: "#241C15",
        bark: "#3A2E23",
        ivory: "#F8F4EC",
        sand: "#EBE2D4",
        champagne: "#C8A96A",
        gold: "#B08D48",
        stone: "#8A8074",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wide2: "0.18em",
      },
      maxWidth: {
        shell: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
