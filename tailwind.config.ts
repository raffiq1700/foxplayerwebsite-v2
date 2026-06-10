import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        background: "#0B1220", // Deep Navy Black
        surface: {
          DEFAULT: "#1A2235", // Card Background
          hover: "#232D45",   // Subtle card hover
          elevated: "#2A3650",// Elevated borders/containers
        },
        primary: {
          DEFAULT: "#00E676", // Professional Trading Green
          glow: "rgba(0, 230, 118, 0.15)",
        },
        secondary: {
          DEFAULT: "#3B82F6", // Premium Blue
          glow: "rgba(59, 130, 246, 0.15)",
        },
        accent: {
          DEFAULT: "#00E676", // Trading Green
          glow: "rgba(0, 230, 118, 0.15)",
        },
        border: "rgba(255, 255, 255, 0.08)", // Premium transparent white border
        white: "#FFFFFF", // Standard white
        black: "#000000", // Standard black
        warning: "#F59E0B",
        loss: "#EF4444",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-gradient": "radial-gradient(at 0% 0%, rgba(37, 99, 235, 0.08) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(15, 23, 42, 0.05) 0px, transparent 50%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(37, 99, 235, 0.1), 0 0 10px rgba(37, 99, 235, 0.05)" },
          "100%": { boxShadow: "0 0 20px rgba(37, 99, 235, 0.2), 0 0 40px rgba(37, 99, 235, 0.1)" },
        }
      },
    },
  },
  plugins: [],
};
export default config;
