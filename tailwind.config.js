/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        shark: {
          50: "#f4f6f7",
          100: "#e2e8eb",
          200: "#c8d3d9",
          300: "#a2b5be",
          400: "#748e9c",
          500: "#597281",
          600: "#4c5f6e",
          700: "#42505c",
          800: "#3c464e",
          900: "#23282d",
        },
        amber: {
          50: "#ffffea",
          100: "#fffbc5",
          200: "#fff885",
          300: "#ffee46",
          400: "#ffdf1b",
          500: "#ffc107",
          600: "#e29400",
          700: "#bb6902",
          800: "#985108",
          900: "#7c420b",
        },
        gray: {
          50: "#FAFAFC",
          100: "#E9E9EC",
          200: "#C6C8CD",
          300: "#ACAEB6",
          400: "#92959F",
          500: "#777C87",
          600: "#5D6370",
          700: "#434959",
          800: "#293041",
          900: "#0f172a",
        },
      },
    },
  },
  plugins: [],
};
