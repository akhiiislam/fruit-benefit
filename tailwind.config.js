/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
// tailwind.config.js
module.exports = {
  darkMode: "class", // Use class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure your components are included in the content
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
