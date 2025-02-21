/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        showcase: "url('/images/showcase.jpg')",
      },
      width: {
        500: "500px",
        600: "600px",
        700: "700px",
      },
    },
  },
  plugins: [],
};
