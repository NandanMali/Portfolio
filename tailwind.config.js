/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#111011",
          soft: "#1B1A17",
          softer: "#242220",
        },
        parchment: "#F6F1E7",
        paper: "#FBF8F2",
        copper: {
          DEFAULT: "#C9683A",
          deep: "#A24F29",
          soft: "#F3E0D2",
        },
        stone: "#8A8477",
        line: "#E7E0D1",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        content: "1240px",
      },
    },
  },
  plugins: [],
};
