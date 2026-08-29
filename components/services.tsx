'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Check } from 'lucide-react'

const features = [
  'Meta, Google, YouTube & TikTok Ads',
  'Full-Funnel Strategy & Architecture',
  'Conversion Tracking & Meta CAPI',
  'CRM & Sales Automation',
  'Weekly Performance Reporting',
  'Direct access to Carlos — no middlemen',
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative py-28 bg-bg-base" ref={ref}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="badge mb-4">How I Help</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold">
            How I Grow Your Business
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">

          {/* Main service card — 3 cols */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 card p-8 relative overflow-hidden group">

            {/* Top amber bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0" />

            <div className="relative">
              <span className="badge mb-4">Done-For-You</span>
              <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-2">
                Metaphase Marketing
              </h3>
              <p className="text-white/50 mb-1 text-sm font-medium">Performance marketing for companies that want to scale.</p>

              <p className="text-white/40 text-sm leading-relaxed mt-4 mb-8">
                We take $1M–$20M businesses and weaponize their marketing.
                Paid media that doesn&apos;t just generate clicks — it generates clients.
                You get a full growth system, not a vendor.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/55">
                    <Check size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span className="text-white/25 text-xs uppercase tracking-wider">Starting at</span>
                  <p className="font-heading text-xl font-bold text-white">$2,500<span className="text-white/30 text-sm font-normal">/mo + 10% of ad spend</span></p>
                </div>
                <a href="https://www.metaphasemarketing.com" target="_blank" rel="noopener noreferrer"
                  className="btn-primary">
                  Work With Metaphase <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Consulting card — 2 cols */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 card p-7 flex flex-col relative overflow-hidden">

            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <span className="badge mb-4 self-start">1:1 Consulting</span>
            <h3 className="font-heading text-xl font-bold text-white mb-2">Get My Brain on Your Business</h3>
            <p className="text-white/40 text-sm leading-relaxed flex-1 mb-6">
              Strategy sessions, account audits, and fractional CMO work.
              Ideal if you want expert direction without the full engagement.
            </p>

            <div className="mt-auto">
              <p className="font-heading text-2xl font-bold text-white mb-1">
                $500<span className="text-white/30 text-sm font-normal">/mo</span>
              </p>
              <p className="text-white/30 text-xs mb-5">Cancel anytime</p>
              <a href="https://cal.com/metaphase-marketing/15min" target="_blank" rel="noopener noreferrer"
                className="btn-ghost w-full justify-center">
                Book a Discovery Call
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
