/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/preset");

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
  ],
  presets: [nativewind], // ✅ this line is now REQUIRED
  theme: {
    extend: {},
  },
  plugins: [],
};
