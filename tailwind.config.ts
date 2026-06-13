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
        background: "#050816",
        surface: {
          DEFAULT: "#0F172A",
          hover: "#1E293B",
          elevated: "#334155",
        },
        primary: {
          DEFAULT: "#00D4FF",
          glow: "rgba(0, 212, 255, 0.15)",
        },
        secondary: {
          DEFAULT: "#8B5CF6",
          glow: "rgba(139, 92, 246, 0.15)",
        },
        accent: {
          DEFAULT: "#00D4FF",
          glow: "rgba(0, 212, 255, 0.15)",
        },
        border: "rgba(255, 255, 255, 0.08)",
        white: "#FFFFFF",
        black: "#000000",
        warning: "#F59E0B",
        loss: "#EF4444",
        "market-up": "#10B981",
        "market-down": "#EF4444",
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
