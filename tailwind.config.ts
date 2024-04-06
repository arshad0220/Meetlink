import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        dark: {
          1: '#2E1C1F', // Swapped colors inside dark palette
          2: '#251619',
          3: '#41252A',
          4: '#571E27',
        },
        blue: {
          1: "#0E78F9",  // Original color
          2: "#C7E0F4",  // Lighter blue
          3: "#EBF5FF",  // Very light blue
          4: "#0067C7",  // Darker blue
          5: "#004C9A"   // Very dark blue
        },
        sky: {
          1: "#C9DDFF",  // Light blue
          2: "#ECF0FF",  // Lighter blue
          3: "#F5FCFF",  // Very light blue
          4: "#A3C1F7",  // Darker blue
          5: "#668FDA"   // Very dark blue
        },
        orange: {
          1: "#FF742E",  // Orange
          2: "#F0A58C",  // Lighter orange (Light Coral)
          3: "#E27D5E",  // Muted orange (Terracotta)
          4: "#B7493F",  // Deeper orange (Rust)
          5: "#FF91A4"   // Contrasting pink (Salmon Pink),
        },
        purple: {
          1: "#830EF9",  // Purple
          2: "#A07EFF",  // Lighter purple
          3: "#C6B3FF",  // Very light purple
          4: "#5C0AF9",  // Darker purple
          5: "#3A07C7"   // Very dark purple,
        },
        yellow: {
          1: "#F9A90E",  // Yellow
          2: "#F9B700",  // Lighter yellow (Mustard Yellow)
          3: "#FFF2CC",  // Very light yellow
          4: "#D79A00",  // Darker yellow (Amber)
          5: "#C77A00"   // Very dark yellow (Gold),
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        hero: "url('/images/hero-background.png')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
