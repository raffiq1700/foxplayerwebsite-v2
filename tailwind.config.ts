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
        background: "#05070A", // Sophisticated Midnight Slate
        surface: {
          DEFAULT: "#0D111A",
          hover: "#161C2C",
          elevated: "#1D253B",
        },
        primary: {
          DEFAULT: "#22D3EE", // Electric Cyan
          glow: "rgba(34, 211, 238, 0.5)",
        },
        secondary: {
          DEFAULT: "#8B5CF6", // Royal Purple
          glow: "rgba(139, 92, 246, 0.5)",
        },
        accent: {
          DEFAULT: "#10B981", // Emerald Green
          glow: "rgba(16, 185, 129, 0.5)",
        },
        border: "rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-gradient": "radial-gradient(at 0% 0%, rgba(34, 211, 238, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(139, 92, 246, 0.15) 0px, transparent 50%)",
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
          "0%": { boxShadow: "0 0 5px rgba(34, 211, 238, 0.2), 0 0 10px rgba(34, 211, 238, 0.1)" },
          "100%": { boxShadow: "0 0 20px rgba(34, 211, 238, 0.4), 0 0 40px rgba(34, 211, 238, 0.2)" },
        }
      },
    },
  },
  plugins: [],
};
export default config;
