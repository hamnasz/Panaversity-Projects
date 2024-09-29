/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        gray: {
          "100": "#8e8e93",
          "200": "#262626",
          "300": "#121212",
          "400": "rgba(255, 255, 255, 0.15)",
        },
        whitesmoke: "#f9f9f9",
        darkslategray: "rgba(60, 60, 67, 0.18)",
      },
      spacing: {},
      fontFamily: {
        "sf-pro-text": "'SF Pro Text'",
      },
      borderRadius: {
        "3xs": "10px",
        "11xs-3": "1.3px",
        "10xs-7": "2.7px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      mini: "15px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
