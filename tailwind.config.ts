import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      textColor: {
        primary: "var(--gray-12)",
        secondary: "var(--gray-11)",
        tertiary: "var(--gray-9)",
        link: "var(--blue-11)",
      },
      backgroundColor: {
        contrast: "var(--contrast-color)",
        primary: "var(--gray-1)",
        secondary: "var(--gray-2)",
        tertiary: "var(--gray-3)",
      },
      borderColor: {
        primary: "var(--gray-6)",
        secondary: "var(--gray-3)",
      },
      divideColor: {
        primary: "var(--gray-6)",
        secondary: "var(--gray-3)",
      },
      ringOffsetColor: {
        primary: "var(--gray-12)",
      },
      boxShadow: {
        soft: "0 15px 30px 0 rgba(0, 0, 0, 0.04)",
      },
      keyframes: {
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
        in: {
          "0%": { transform: "translateY(18px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "in-reverse": {
          "0%": { transform: "translateY(-18px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
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
        in: "in .6s both",
        "in-reverse": "in-reverse .6s both",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
