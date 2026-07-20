/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Arvo', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-faint': `linear-gradient(rgba(74,222,128,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.02) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '64px 64px',
      },
    },
  },
  plugins: [],
}
