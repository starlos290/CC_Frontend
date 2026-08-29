'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, ArrowRight } from 'lucide-react'

const features = [
  'Meta, Google, YouTube, TikTok Ads',
  'Full-Funnel Strategy',
  'Conversion Tracking & CAPI',
  'CRM Automation',
  'Monthly Reporting',
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-bg-base" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            How I Help You <span className="text-gradient-gold">Grow</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Done-for-you performance marketing that drives real revenue — not vanity metrics.
          </p>
        </motion.div>

        {/* Primary service card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative card-base p-10 mb-6 overflow-hidden card-hover"
        >
          {/* Amber top accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-dark rounded-t-2xl" />

          {/* Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
                Done-For-You
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-3">
                Metaphase Marketing
              </h3>
              <p className="text-accent font-semibold mb-4">
                Performance marketing for companies that want to scale.
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                We take $1M–$20M businesses and weaponize their marketing. Paid media
                that doesn&apos;t just generate clicks — it generates clients.
              </p>
              <div className="text-text-muted text-sm mb-6">
                Starting at{' '}
                <span className="text-text-primary font-semibold">$2,500/mo</span>
                {' '}+ 10% of ad spend
              </div>
              <a
                href="https://www.metaphasemarketing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-bg-base font-bold hover:bg-accent-dark transition-all duration-200"
              >
                Work With Metaphase
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="space-y-3">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3 p-3 rounded-lg bg-bg-elevated">
                  <span className="w-5 h-5 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-accent" />
                  </span>
                  <span className="text-text-secondary text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Consulting card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card-base p-8 flex flex-col md:flex-row items-center justify-between gap-6 card-hover"
        >
          <div>
            <h3 className="font-heading text-xl font-bold mb-2">1:1 Consulting</h3>
            <p className="text-text-secondary text-sm">
              Get Carlos&apos;s brain on your business. Strategy sessions, audits, and fractional
              CMO work.
            </p>
          </div>
          <div className="flex items-center gap-6 flex-shrink-0">
            <div className="text-right">
              <div className="text-2xl font-heading font-bold text-accent">$500<span className="text-text-muted text-base">/mo</span></div>
            </div>
            <a
              href="https://cal.com/metaphase-marketing/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl border border-accent/30 text-accent font-semibold text-sm hover:bg-accent/10 transition-all duration-200 whitespace-nowrap"
            >
              Book a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
