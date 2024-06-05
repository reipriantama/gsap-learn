import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        loopL: "loopTextLeft 5s linear infinite",
      },
      keyframes: {
        loopTextLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionProperty: {
        height: "height",
      },
      colors: {
        orange: "#ed7c50",
        darkOrange: "#d96d43",
        darkGrey: "#595959",
        lightGrey: "#8a8a8a",
        green: "#43ae61",
        purple: "#8566f6",
        turks: "#a6e2e3",
        red: "#e46060",
        black: "#282829",
        white: "#f5f4f5",
      },
    },
  },
  plugins: [],
};
export default config;
