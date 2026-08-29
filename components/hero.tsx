'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const platforms = ['Meta Ads', 'Google Ads', 'YouTube', 'TikTok', 'Programmatic', 'Meta CAPI', 'Full-Funnel', 'Direct Response']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg-base">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-dots bg-grid-md opacity-100 pointer-events-none" />

      {/* Amber ambient glow — big, soft */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[800px] h-[500px] rounded-full bg-amber-500/[0.04] blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div {...fade(0.1)} className="flex justify-center mb-8">
          <span className="badge">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Performance Marketer · CEO, Metaphase Marketing
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1 {...fade(0.2)}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.0] tracking-tight mb-8">
          I Build Marketing<br />
          Machines That{' '}
          <span className="text-gold">Scale.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p {...fade(0.35)}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
          6 years. $30M+ in ad spend. 50M+ leads generated. I&apos;ve cracked what actually
          moves the needle — and I use it to grow businesses like yours.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fade(0.45)} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a href="https://cal.com/metaphase-marketing/15min" target="_blank" rel="noopener noreferrer"
            className="btn-primary">
            Book a Discovery Call
            <ArrowRight size={16} />
          </a>
          <button onClick={() => document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-ghost">
            See My Work
          </button>
        </motion.div>

        {/* Platform tags */}
        <motion.div {...fade(0.55)} className="flex flex-wrap justify-center gap-2">
          {platforms.map(p => (
            <span key={p} className="px-3 py-1 rounded-full text-xs text-white/30 border border-white/[0.07] font-medium">
              {p}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div {...fade(0.9)}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  )
}
