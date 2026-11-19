/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050507",
        surface: "#0E0E14",
        raise: "#16161F",
        line: "#25252F",
        neon: "#B6FF2E",
        violet: { DEFAULT: "#8A4DFF", soft: "#B18CFF" },
        mute: "#9A9FB2",
        danger: "#FF5C7A",
      },
      fontFamily: {
        display: ['"Chakra Petch"', "system-ui", "sans-serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(182,255,46,.55), 0 0 28px rgba(182,255,46,.18)",
        violet: "0 0 0 1px rgba(138,77,255,.55), 0 0 28px rgba(138,77,255,.2)",
      },
      keyframes: {
        shimmer: { "100%": { transform: "translateX(100%)" } },
        pop: { from: { opacity: 0, transform: "translateY(8px) scale(.98)" }, to: { opacity: 1, transform: "none" } },
        fade: { from: { opacity: 0 }, to: { opacity: 1 } },
      },
      animation: { pop: "pop .18s ease-out", fade: "fade .2s ease-out" },
    },
  },
  plugins: [],
};
