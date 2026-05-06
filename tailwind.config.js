/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          bg: "#131608",      // Dark olive base
          text: "#EDE3CE",    // Vanilla primary text
          accent: "#96A84E",  // Olive gold
          warm: "#C8A96A",    // Cappuccino amber
          code: "#1C2110",    // Elevated card surface
          border: "#2E3518",  // Subtle border
          muted: "#8A7C65",   // Muted cappuccino
          surface: "#181C0A", // Deep card surface
          highlight: "#2A3015",
        }
      },
      fontFamily: {
        serif: ["'DM Serif Display'", 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ["'JetBrains Mono'", 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.06em',
        'tighter': '-0.04em',
        'tight': '-0.02em',
      },
      lineHeight: {
        'hero': '0.85',
        'relaxed': '1.625',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
      animation: {
        'gradient-x': 'gradient-x 6s ease infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.02), 0 8px 24px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.04), 0 24px 48px rgba(0,0,0,0.08)',
        'glow': '0 0 40px rgba(107, 142, 125, 0.08)',
        'inner-soft': 'inset 0 1px 2px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
}
