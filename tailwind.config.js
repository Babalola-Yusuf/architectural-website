// TailwindCSS Update to Support Aspect Ratios (tailwind.config.js)
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c', // Custom primary color for Navbar and Footer
        accent: '#ffb703',  // Accent color for buttons and highlights
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Primary font family for the project
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out', // Animation for smooth fade-in effects
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // Add Aspect Ratio Plugin
  ],
};