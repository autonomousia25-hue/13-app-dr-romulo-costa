/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#63a3b4",
        primaryDark: "#2b4f59",
        primaryLight: "#acd4dc",
        background: "#F8FAFC",
        textPrimary: "#1E293B"
      }
    },
  },
  plugins: [],
}
