'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, Mail } from 'lucide-react'

const BOOK_URL = 'https://cal.com/metaphase-marketing/15min'

const trustItems = [
  'No long-term contracts',
  'Direct access to Carlos',
  'Results in 90 days or we part ways',
]

export default function Cta() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-bg-base">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-accent/8 blur-[140px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-text-secondary font-medium tracking-wide uppercase">
            Ready to Scale?
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6"
        >
          Let&apos;s Build Your
          <br />
          <span className="text-gradient-gold">Marketing Machine.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-text-secondary max-w-xl mx-auto mb-10 leading-relaxed"
        >
          If you&apos;re doing $1M–$20M in revenue and want a proven marketing system,
          let&apos;s talk. Book a 15-minute discovery call — no pitch, just strategy.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent hover:bg-accent-dark text-bg-base font-semibold text-base transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)]"
          >
            <CalendarDays className="w-5 h-5" />
            Book Your Discovery Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Email fallback */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm text-text-muted mb-10"
        >
          Or reach me directly at{' '}
          <a
            href="mailto:carlos@metaphasemarketing.com"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            carlos@metaphasemarketing.com
          </a>
        </motion.p>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
