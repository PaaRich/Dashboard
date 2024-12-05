/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
      },
      keyframes: {
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "30%": { transform: "scale(1.3)" },
          "60%": { transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
