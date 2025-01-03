import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#0A0F1A",
        secondary: "#121828",
        accent: "#1C2A3A",
        textPrimary: "#EAEFF2",
        textSecondary: "#A3B0C0",
        highlight: "#3a9ce8",
        warning: "#e85050",
      },
    },
  },
  plugins: [],
} satisfies Config;
