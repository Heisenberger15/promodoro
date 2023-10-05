import type { Config } from "tailwindcss";
import { BREAKPOINTS } from "./styles/config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      colors: {
        green: {
          DEFAULT: "var(--main-green-100)",
          150: "var(--main-green-150)",
          100: "var(--main-green-100)",
          10: "var(--main-green-10)",
          3: "var(--main-green-3)",
        },
        black: {
          DEFAULT: "var(--text-primary-black-100)",
          100: "var(--text-primary-black-100)",
          40: "var(--text-secondary-black-40)",
          20: "var(--main-backdrop-opacity-20)",
        },
        white: {
          DEFAULT: "var(--main-white-100)",
          100: "var(--main-white-100)",
          "opacity-75": "var(--main-white-opacity-75)",
        },
        stroke: {
          DEFAULT: "var(--main-stroke)",
        },
        button: {
          inactive: "var(--main-button-inactive)",
        },
        red: {
          "calendar-main": "var(--calendar-main-red)",
          "system-alert": "var(--main-system-alert)",
        },
      },
    },
    screens: BREAKPOINTS,
  },
  plugins: [],
};
export default config;
