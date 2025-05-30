import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-down-infinite": {
          from: {
            bottom: "0",
            height: "100%",
          },
          to: {
            bottom: "-50%",
            height: "10%",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },

        verticalAnimation: {
          "0%": {
            transform: "translateY(-150%)",
          },
          "30%": {
            transform: "translateY(0)",
          },
          "70%": {
            transform: "translateY(0)",
          },
          "95%": {
            transform: "translateY(75%)",
          },
          "100%": {
            transform: "translateY(150%)",
          },
        },

        horizontalAnimation: {
          "0%": {
            transform: "translate(0)",
          },
          "40%": {
            transform: "translate(150%)",
          },

          "41%": {
            transform: "translate(-150%)",
          },
          "80%": {
            transform: "translate(0)",
          },
          "100%": {
            transform: "translate(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out infinite",
        "accordion-up": "accordion-up 0.2s ease-out",
        vertical: "verticalAnimation 2.5s cubic-bezier(0,0,.1,1) infinite",
        horizontal: "horizontalAnimation 2.5s cubic-bezier(0,0,.1,1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
