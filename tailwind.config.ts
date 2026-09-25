import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand tokens pulled from the Gorilla Motors Ltd company profile
        ink: '#0A0A0A', // hero / footer background
        crimson: '#C6202A', // primary brand red
        crimsonDark: '#7A1319', // darker red for gradients/hover
        paper: '#FFFFFF',
        offwhite: '#F7F5F4',
        ash: '#5B5B5B', // muted body text on light backgrounds
        line: '#E7E3E1', // hairline borders on light sections
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
} satisfies Config;
