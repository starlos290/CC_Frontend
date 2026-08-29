'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'

const skills = [
  'Paid Media (Meta, Google, YouTube, TikTok)',
  'Offline Conversion Tracking & CAPI',
  'Funnel Architecture',
  'Performance Analytics',
  'AI-Driven Automation',
]

const badges = [
  "ASU Microbiology '16",
  'Metaphase Marketing, CEO',
  '6+ Years Experience',
  'Direct Response Expert',
]

const socials = [
  { Icon: Twitter, href: 'https://twitter.com/carloscourtney', label: 'Twitter / X' },
  { Icon: Instagram, href: 'https://www.instagram.com/helloimcarlos/', label: 'Instagram' },
  { Icon: Youtube, href: 'https://www.youtube.com/c/CarlosCourtney', label: 'YouTube' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/carloscourtney', label: 'LinkedIn' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 bg-bg-elevated" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-6">
            About Carlos
          </span>

          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 leading-tight">
            From Microbiology Lab to{' '}
            <span className="text-gradient-gold">Marketing Machine</span>
          </h2>

          <div className="space-y-5 text-text-secondary leading-relaxed">
            <p>
              Started at ASU studying Microbiology. Trained to follow data, think in
              systems, and solve complex problems. Realized the real lab was the market.
            </p>
            <p>
              Went all-in on paid media in 2017. Ran campaigns for political movements,
              health clinics, eCommerce brands, and service companies. Some generated
              100,000+ leads. Others scaled from zero to seven figures.
            </p>
            <p>
              Today I run Metaphase Marketing — a performance marketing agency for
              $1M–$20M businesses that want to scale. We don&apos;t just run ads. We build
              systems.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-text-primary font-semibold mb-3">What I&apos;m known for:</p>
            <ul className="space-y-2">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-text-secondary text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right: card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="card-base p-8 bg-grid-dots bg-grid-md relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-3 mb-8">
              {badges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-3 p-3 rounded-lg bg-bg-base/60 border border-white/[0.06]"
                >
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-text-primary text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>

            {/* Social row */}
            <div className="relative z-10 pt-6 border-t border-white/[0.06]">
              <p className="text-text-muted text-xs uppercase tracking-wider mb-4">Find me online</p>
              <div className="flex gap-3">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-lg bg-bg-base/60 border border-white/[0.06] text-text-muted hover:text-accent hover:border-accent/20 transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
