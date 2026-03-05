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
        'bg-base': '#080c18',
        'bg-card': '#0d1424',
        'bg-elevated': '#121a30',
        accent: '#14b8a6',
        'accent-dark': '#0d9488',
        trust: '#10b981',
        'text-primary': '#f8fafc',
        'text-secondary': '#94a3b8',
        'text-muted': '#475569',
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-dots':
          'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-sm': '24px 24px',
        'grid-md': '32px 32px',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 10s ease infinite',
        'fade-in-up': 'fade-in-up 0.5s ease forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        card: '0 0 0 1px rgba(255,255,255,0.04)',
        'card-hover': '0 0 0 1px rgba(20,184,166,0.18), 0 8px 32px rgba(20,184,166,0.08)',
        glow: '0 0 24px rgba(20,184,166,0.3)',
      },
    },
  },
  plugins: [],
}

export default config
