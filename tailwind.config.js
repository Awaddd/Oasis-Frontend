module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      fontFamily: {
        inter: "Inter, sans-serif",
      },
      colors: {
        primary: "#1c86ff",
        darkBlue: "#3182ce",
        gray: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
      },
      spacing: {
        xs: "4px",
        sm: "7px",
        md: "14px",
        lg: "30px",
        xl: "60px",
        "2xl": "85px",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
