
import { type Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'minecraft': ['"Press Start 2P"', 'cursive'],
        'pixel': ['"VT323"', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        navy: {
          DEFAULT: "#0F172A",
          dark: "#0A1122",
          light: "#1E293B",
        },
        creeper: {
          DEFAULT: "#50C878",
          dark: "#3BA664",
          light: "#70E898",
        },
        grass: {
          DEFAULT: "#7CBD56",
          dark: "#5A9B3F",
          light: "#9DD770",
        },
        dirt: {
          DEFAULT: "#8B6F47",
          dark: "#6B5336",
          light: "#A58A63",
        },
        stone: {
          DEFAULT: "#7D7D7D",
          dark: "#5A5A5A",
          light: "#9E9E9E",
        },
        diamond: {
          DEFAULT: "#5DADE2",
          dark: "#3498DB",
          light: "#85C1E9",
        },
        redstone: {
          DEFAULT: "#DC143C",
          dark: "#B01030",
          light: "#E74C3C",
        },
        discord: {
          DEFAULT: "hsl(var(--discord))",
          dark: "hsl(var(--discord-dark))",
          light: "hsl(var(--discord-light))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        pixel: "2px",
        block: "4px",
      },
      boxShadow: {
        'pixel': '4px 4px 0px rgba(0, 0, 0, 0.4)',
        'pixel-lg': '6px 6px 0px rgba(0, 0, 0, 0.5)',
        'pixel-sm': '2px 2px 0px rgba(0, 0, 0, 0.3)',
        'block': '0 4px 0 0 rgba(0, 0, 0, 0.2)',
        'block-hover': '0 2px 0 0 rgba(0, 0, 0, 0.2)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
