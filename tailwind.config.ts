import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      keyframes: {
        "fade-in-up": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },

          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-10px)",
          },
        },

        "float-slow": {
          "0%, 100%": {
            transform:
              "translateX(-50%) translateY(0px)",
          },

          "50%": {
            transform:
              "translateX(-50%) translateY(-5px)",
          },
        },
      },

      animation: {
        "fade-in-up":
          "fade-in-up 0.5s ease both",

        float:
          "float 4s ease-in-out infinite",

        "float-slow":
          "float-slow 6s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};

export default config;