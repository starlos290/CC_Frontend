'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'

const expertise = [
  'Paid Media — Meta, Google, YouTube, TikTok',
  'Offline Conversion Tracking & CAPI',
  'Funnel Architecture & CRO',
  'Performance Analytics & Attribution',
  'AI-Driven Marketing Automation',
]

const socials = [
  { Icon: Twitter,   href: 'https://twitter.com/carloscourtney',               label: 'X / Twitter' },
  { Icon: Instagram, href: 'https://www.instagram.com/helloimcarlos/',          label: 'Instagram' },
  { Icon: Youtube,   href: 'https://www.youtube.com/c/CarlosCourtney',          label: 'YouTube' },
  { Icon: Linkedin,  href: 'https://www.linkedin.com/in/carloscourtney',        label: 'LinkedIn' },
]

const tags = ["ASU Microbiology '16", 'Metaphase Marketing CEO', '6+ Years Experience', 'Direct Response']

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="relative py-28 bg-bg-section" ref={ref}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}>

          <span className="badge mb-6">About Carlos</span>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-8">
            From Microbiology Lab<br />
            to <span className="text-gold">Marketing Machine</span>
          </h2>

          <div className="space-y-5 text-white/55 leading-relaxed text-base">
            <p>
              Started at ASU studying Microbiology. Trained to follow data, think in systems,
              and solve complex problems. Realized the real lab was the market.
            </p>
            <p>
              Went all-in on paid media in 2017. Ran campaigns for political movements,
              health clinics, eCommerce brands, and service companies — some generating
              100K+ leads, others scaling from zero to seven figures.
            </p>
            <p>
              Today I run <span className="text-white font-semibold">Metaphase Marketing</span> — a performance marketing agency for
              $1M–$20M businesses. We don&apos;t just run ads. We build systems.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-8 space-y-2">
            {expertise.map(s => (
              <div key={s} className="flex items-center gap-3 text-sm text-white/50">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                {s}
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4 mt-8">
            {socials.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-amber-400 hover:border-amber-500/30 transition-all duration-200">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: Card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22,1,0.36,1] }}>

          <div className="card p-8 relative overflow-hidden">
            {/* Grid pattern inside card */}
            <div className="absolute inset-0 bg-grid-dots bg-grid-md opacity-40 pointer-events-none" />
            {/* Amber glow corner */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-amber-500/[0.06] blur-[60px] pointer-events-none" />

            <div className="relative">
              {/* Name + title */}
              <div className="mb-8">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                  <span className="font-heading text-xl font-bold text-amber-400">CC</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white">Carlos Courtney</h3>
                <p className="text-white/40 text-sm">CEO · Metaphase Marketing</p>
              </div>

              {/* Tag pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {tags.map(t => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs bg-white/[0.05] border border-white/[0.09] text-white/50 font-medium">
                    {t}
                  </span>
                ))}
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-3">
                {[['$30M+','Ad Spend'],['50M+','Leads'],['6+','Years'],['12M+','Faxes Sent']].map(([n,l]) => (
                  <div key={l} className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.07]">
                    <div className="font-heading font-bold text-amber-400 text-lg">{n}</div>
                    <div className="text-white/35 text-xs">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
