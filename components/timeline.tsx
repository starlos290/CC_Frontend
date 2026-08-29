'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const milestones = [
  {
    year: '2016',
    title: 'The Scientist Who Saw More',
    desc: 'Graduated from ASU with a degree in Microbiology. Trained to follow data, think in systems, and solve complex problems. Realized the real opportunity was in human behavior — not a lab.',
    highlight: "ASU Microbiology '16",
  },
  {
    year: '2017',
    title: 'The Ad Architect',
    desc: 'Went all-in on paid media. First successful campaigns for health clinics and service businesses. Developed a data-backed, direct-response approach that became the foundation for everything after.',
    highlight: 'First 7-Figure Campaign',
  },
  {
    year: '2020',
    title: 'Invented Fax Marketing. No, Really.',
    desc: 'While everyone chased digital trends, I brought back fax campaigns for clinics and medical offices. Zero competition. Shocking response rates. 12M+ faxes sent. $10M+ revenue generated.',
    highlight: '12M+ Faxes · $10M+ Revenue',
  },
  {
    year: '2023',
    title: 'Metaphase: Built to Scale',
    desc: 'Founded Metaphase Marketing to bring elite growth systems to ambitious businesses. The agency now manages $30M+ in ad spend annually across Meta, Google, YouTube, and TikTok.',
    highlight: '$30M+ Ad Spend Managed',
  },
  {
    year: 'Now',
    title: 'Scaling Businesses to the Moon',
    desc: 'Running Metaphase Marketing full-time. Managing campaigns for clients across healthcare, eCommerce, and B2B. Building a next-generation performance marketing operation powered by AI.',
    highlight: '50M+ Leads Generated',
  },
]

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="track" className="relative py-28 bg-bg-section" ref={ref}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="badge mb-4">The Journey</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold">
            Career Milestones
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-0">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-[120px] top-0 bottom-0 w-px bg-white/[0.08]" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div key={m.year}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-6 md:gap-10">

                {/* Year label */}
                <div className="hidden md:block w-[120px] flex-shrink-0 text-right">
                  <span className="font-heading font-bold text-amber-400 text-sm">{m.year}</span>
                </div>

                {/* Dot */}
                <div className="absolute left-[-4px] md:left-[116px] top-1 w-2 h-2 rounded-full bg-amber-500 border-2 border-bg-section" />

                {/* Content */}
                <div className="flex-1 card p-6 ml-4 md:ml-0">
                  <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                    <div>
                      <span className="md:hidden text-amber-400 text-xs font-bold mb-1 block">{m.year}</span>
                      <h3 className="font-heading text-base md:text-lg font-bold text-white">{m.title}</h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-semibold uppercase tracking-wider whitespace-nowrap flex-shrink-0">
                      {m.highlight}
                    </span>
                  </div>
                  <p className="text-white/45 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
