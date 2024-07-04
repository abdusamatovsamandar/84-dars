/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      bgImage: {
        'hero-pattern': "url('/assets/images/hero-bg.jpeg')",
      },

      bgOp: {
        0: "rgba(0, 0, 0, 0)",
        25: "rgba(0, 0, 0, 0.25)",
        50: "rgba(0, 0, 0, 0.5)",
        100: "rgba(0, 0, 0, 1)",
      }

    },
    fontFamily: {
      lato: ["Lato", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [],
}
