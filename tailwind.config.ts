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
        'bg-base': '#070707',
        'bg-card': '#111111',
        'bg-elevated': '#1a1a1a',
        'accent': '#f59e0b',
        'accent-dark': '#d97706',
        'accent-muted': '#78350f',
        'text-primary': '#fafafa',
        'text-secondary': '#a3a3a3',
        'text-muted': '#525252',
        'border': 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        heading: ['var(--font-sora)', 'sans-serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-dots': 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-sm': '24px 24px',
        'grid-md': '32px 32px',
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          from: { opacity: '0', transform: 'translateX(-24px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(24px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'number-tick': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'marquee': {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-50%)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease forwards',
        'slide-in-left': 'slide-in-left 0.6s ease forwards',
        'slide-in-right': 'slide-in-right 0.6s ease forwards',
        'number-tick': 'number-tick 0.4s ease forwards',
        'marquee': 'marquee 30s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'card': '0 0 0 1px rgba(255,255,255,0.04)',
        'card-hover': '0 0 30px rgba(245,158,11,0.08)',
        'glow-amber': '0 0 40px rgba(245,158,11,0.15)',
      },
    },
  },
  plugins: [],
}

export default config
