/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
        "1.8/1": "18 / 10",
        "1/1": "1 / 1",
      },
    },
    color: {
      "accent-dark": "hsl(var(--color-accent-dark)/<alpha-value>)",
      accent: "#312e81",
      body: "#fffefc",
      green: "#054e31",
      "green-bg": "#d1fadf",
      "red-bg": "#fee2e2",
      "color-body": "#fffefc",
      "color-accent": "#312e81",
      "color-white": "#fff",
      "color-black": "#000",
      "color-red": "#e61414",
      "color-900": "#171717",
      "color-700": "#404040",
      "color-500": "#525252",
      "color-400": "#737373",
      "color-200": "#d4d4d4",
      "color-100": "#f5f5f5",
      woocommerce: "#a46497",
      "wc-green": "#7ad03a",
      "wc-red": "#a00",
      "wc-orange": "#ffba00",
      "wc-blue": "#2ea2cc",
      "wc-primary": "#a46497",
      "wc-primary-text": "white",
      "wc-secondary": "#ebe9eb",
      "wc-secondary-text": "#515151",
      "wc-highlight": "#77a464",
      "wc-highligh-text": "white",
      "wc-content-bg": "#fff",
      "wc-subtext": "#767676",
    },
    fontFamily: {},
  },
  plugins: [],
};
