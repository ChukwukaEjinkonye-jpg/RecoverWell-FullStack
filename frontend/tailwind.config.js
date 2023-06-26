const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          'custom-color': '#bfb5a1',
        },
        hues: {
          "50": "#eff5ff",
          "100": "#deebff",
          "200": "#bdd8ff",
          "300": "#9cc4ff",
          "400": "#7bb1ff",
          "500": "#5a9dff",
          "600": "#487ecc",
          "700": "#365e99",
          "800": "#243f66",
          "900": "#121f33"
        },
        'meadow': {
          DEFAULT: '#10B981',
          50: '#8CF5D2',
          100: '#79F3CB',
          200: '#53F0BC',
          300: '#2EEDAE',
          400: '#13DF9B',
          500: '#10B981',
          600: '#0C855D',
          700: '#075239',
          800: '#031E15',
          900: '#000000',
          950: '#000000'
        },
        'palette': {
          default : '#2b6777',
          teal: '#c8d8e4',
          white: '#ffffff',
          grey: '#f2f2f2',
          aqua: '#52ab98',
          pink:'#ed7966'
        }
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  plugins: [require("tailwindcss"), require("daisyui")],
});
