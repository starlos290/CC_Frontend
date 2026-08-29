'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

const brands = [
  'Allergan',
  'Keller Williams',
  'The Game Changers (Netflix)',
  'Political Campaigns',
  'Health Clinics',
  'eCommerce Brands',
  'Allergan',
  'Keller Williams',
  'The Game Changers (Netflix)',
  'Political Campaigns',
  'Health Clinics',
  'eCommerce Brands',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg-base">
      {/* Grid dot background */}
      <div className="absolute inset-0 bg-grid-dots bg-grid-md opacity-60" />

      {/* Ambient amber glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-text-secondary font-medium tracking-wide">
            Performance Marketer · CEO, Metaphase Marketing
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-heading text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6"
        >
          I Build Marketing Machines{' '}
          <br className="hidden md:block" />
          That{' '}
          <span className="text-gradient-gold">Scale.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.35)}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          6 years. $30M+ in ad spend. 50M+ leads. I&apos;ve cracked the code on what
          actually moves the needle — now I use it to grow businesses like yours.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://cal.com/metaphase-marketing/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-7 py-4 rounded-xl bg-accent text-bg-base font-bold text-base hover:bg-accent-dark transition-all duration-200 shadow-glow-amber"
          >
            Book a Discovery Call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => {
              const el = document.querySelector('#works')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-7 py-4 rounded-xl border border-white/[0.12] text-text-primary font-semibold text-base hover:border-accent/30 hover:text-accent transition-all duration-200"
          >
            See My Work
          </button>
        </motion.div>

        {/* Social proof marquee */}
        <motion.div {...fadeUp(0.65)} className="w-full overflow-hidden">
          <p className="text-xs text-text-muted uppercase tracking-widest mb-4">
            Trusted by brands like&hellip;
          </p>
          <div className="relative flex overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {brands.map((brand, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-4 mx-6 text-text-muted text-sm font-medium"
                >
                  <span className="w-1 h-1 rounded-full bg-accent/50" />
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted animate-bounce"
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  )
}
