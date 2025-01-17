/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        blink: "blink 1.5s infinite", // Create a 'blink' animation with a 1.5s duration
      },
      keyframes: {
        blink: {
          "0%, 100%": {
            opacity: "1", // Fully visible
          },
          "50%": {
            opacity: "0", // Invisible halfway through the animation
          },
        },
      },
    },
  },
  plugins: [],
}

