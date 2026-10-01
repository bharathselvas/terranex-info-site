import type { Config } from "tailwindcss";

/**
 * Terranex design tokens.
 *
 * These are lifted directly from the Terranex prototype application so the
 * documentation site is unmistakably the same product: the same navy/saffron
 * institutional palette, the same Inter + JetBrains Mono pairing, the same
 * restrained geometry.
 */
const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        ring: "hsl(var(--ring))",
        navy: {
          950: "#08172B",
          900: "#0F2340",
          800: "#1A3560",
          700: "#243E6B",
          600: "#2E4A7A",
          500: "#334E83",
          400: "#4A6FA5",
          100: "#E8EDF5",
          50: "#F0F3F9",
        },
        saffron: {
          // `600` is the on-light text accent. It is deliberately darker than
          // the brand's #C96A1A so small-caps eyebrow text clears WCAG AA
          // (4.5:1) against white.
          600: "#A85A14",
          500: "#E67E22",
          100: "#FEF0E0",
          50: "#FFFAF2",
        },
        slate: {
          // 300 is decorative-only (rules, hairlines, empty grid cells) and is
          // never used for text. 400 is the lightest shade allowed to carry
          // text on white (4.76:1).
          300: "#CBD5E1",
          400: "#64748B",
          500: "#556070",
          600: "#44403C",
          700: "#292524",
        },
        stone: {
          50: "#FAFAF9",
          100: "#F5F5F4",
          200: "#E7E5E4",
          300: "#D6D3D1",
          400: "#A8A29E",
          500: "#78716C",
          600: "#57534E",
          700: "#44403C",
          800: "#292524",
          900: "#1C1917",
        },
        success: "#0F7A5A",
        warning: "#9A6B00",
        danger: "#B42318",
        info: "#1D4ED8",
        rule: "#E4E8EF",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", '"Noto Sans Devanagari"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        dossier: "1240px",
      },
      keyframes: {
        "fade-rise": {
          from: { opacity: "0", transform: "translate3d(0, 18px, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "draw-line": { from: { transform: "scaleY(0)" }, to: { transform: "scaleY(1)" } },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.55" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        "fade-rise": "fade-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.9s ease both",
        "draw-line": "draw-line 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
