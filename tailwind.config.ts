import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617", // slate-950
        foreground: "#f8fafc", // slate-50
        accent: {
          gold: "#f59e0b", // premium gold
          emerald: "#10b981", // positive emerald green
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-philosopher)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(to bottom, rgba(2, 6, 23, 0.4), rgba(2, 6, 23, 1))',
      }
    },
  },
  plugins: [],
};
export default config;
