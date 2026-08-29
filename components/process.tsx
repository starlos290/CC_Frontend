'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  { num: '01', title: 'Diagnose',  desc: 'Analyze your marketing, sales, and operational data. Find short-term wins with outsized impact. No guesswork.' },
  { num: '02', title: 'Architect', desc: 'Build the campaign structure, funnel, tracking, and creative strategy. Nothing launches without a blueprint.' },
  { num: '03', title: 'Launch',    desc: 'Deploy with precision. Every ad set, audience, and creative tested against clear, measurable KPIs.' },
  { num: '04', title: 'Optimize',  desc: 'Daily monitoring. Weekly reporting. Cut what doesn\'t work. Scale what does. No exceptions.' },
  { num: '05', title: 'Scale',     desc: 'Once we have a proven system, we pour fuel on it. More budget, more channels, more revenue.' },
]

export default function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="process" className="relative py-28 bg-bg-base" ref={ref}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="badge mb-4">The System</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            How I Grow Your Business
          </h2>
          <p className="text-white/40 max-w-lg mx-auto">
            I don&apos;t believe in &ldquo;launch and pray.&rdquo; I engineer growth with precision.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-1/2 hidden md:block" />

          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div key={s.num}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex gap-6 md:gap-0 items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                {/* Card — half width on desktop */}
                <div className={`w-full md:w-[calc(50%-2rem)] card p-6 ${i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-heading text-4xl font-extrabold text-amber-500/20 leading-none">{s.num}</span>
                    <h3 className="font-heading text-lg font-bold text-white">{s.title}</h3>
                  </div>
                  <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
                </div>

                {/* Center dot — desktop only */}
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-amber-500 bg-bg-base items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
