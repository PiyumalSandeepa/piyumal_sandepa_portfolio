/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "accent-1": "#00d4ff",
        "accent-2": "#7b2ff7",
        "dark-bg": "#0a0a0f",
        "dark-secondary": "#111118",
        "dark-tertiary": "#1a1a28",
        "dark-card": "rgba(255, 255, 255, 0.03)",
        "dark-border": "rgba(255, 255, 255, 0.07)",
        "dark-text": "#f0f0f5",
        "dark-text-secondary": "#a0a0b8",
        "dark-text-muted": "#5a5a72",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
}