/* eslint-disable no-undef */
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Make sure Tailwind scans your React files
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/path/to/image.jpg')",
      },
      // Add more customizations here if needed
    },
  },
  plugins: [],
};
