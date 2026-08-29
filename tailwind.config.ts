import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-base':    '#050505',
        'bg-section': '#0c0c0c',
        'bg-card':    '#111111',
        'bg-elevated':'#181818',
        'accent':     '#f59e0b',
        'accent-dark':'#d97706',
        'text-primary':  '#ffffff',
        'text-secondary':'#a1a1aa',
        'text-muted':    '#52525b',
        'border-subtle': 'rgba(255,255,255,0.08)',
        'border-visible':'rgba(255,255,255,0.12)',
      },
      fontFamily: {
        heading: ['var(--font-sora)', 'sans-serif'],
        sans:    ['var(--font-dm-sans)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-dots': 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-md': '32px 32px',
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0%)' },
          to:   { transform: 'translateX(-50%)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.4' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease forwards',
        'marquee':    'marquee 35s linear infinite',
        pulse:        'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
}

export default config
