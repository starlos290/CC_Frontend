'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const cases = [
  {
    tag: 'Entertainment',
    badge: 'Netflix Documentary',
    client: 'The Game Changers',
    sub: 'By James Cameron, Arnold Schwarzenegger & Jackie Chan',
    result: '$110K/mo',
    resultLabel: 'Multi-Platform Ad Spend',
    stats: [['$70K/mo','Meta'], ['$30K/mo','Google'], ['$10K/mo','YouTube']],
    description: 'Took a revolutionary documentary about plant-based performance and made it go viral across every major platform.',
  },
  {
    tag: 'Political',
    badge: 'Digital Campaign',
    client: 'Political Campaign',
    sub: 'Statewide digital reach strategy',
    result: '$3.32',
    resultLabel: 'Cost Per Lead',
    stats: [['100K+','Leads'], ['Below avg','CPL'], ['Multi-channel','Strategy']],
    description: 'Scaled a political campaign\'s digital reach with precision targeting — leads at a fraction of industry average CPL.',
  },
  {
    tag: 'Healthcare',
    badge: 'Weight Loss Center',
    client: 'Weight Loss Clinic',
    sub: 'Full-funnel lead generation',
    result: '5.6X',
    resultLabel: 'Average ROAS',
    stats: [['6+ months','Sustained'], ['Meta + Google','Channels'], ['Cold → Booked','Journey']],
    description: 'Built a complete funnel from cold traffic to booked appointments. Consistent 5.6X return sustained over six months.',
  },
]

export default function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="works" className="relative py-28 bg-bg-section" ref={ref}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="badge mb-4">Case Studies</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold">
            Results That Speak<br />for <span className="text-gold">Themselves</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">Real campaigns. Real numbers. No smoke, no mirrors.</p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {cases.map((c, i) => (
            <motion.div key={c.client}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="card p-7 flex flex-col group relative overflow-hidden">

              {/* Amber top line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/70 to-transparent" />

              {/* Tag */}
              <div className="flex items-center justify-between mb-6">
                <span className="badge">{c.tag}</span>
                <ArrowUpRight size={16} className="text-white/20 group-hover:text-amber-400 transition-colors" />
              </div>

              {/* Big result number */}
              <div className="mb-4">
                <div className="font-heading text-4xl font-extrabold text-amber-400">{c.result}</div>
                <div className="text-white/40 text-sm">{c.resultLabel}</div>
              </div>

              {/* Client */}
              <h3 className="font-heading text-lg font-bold text-white mb-1">{c.client}</h3>
              <p className="text-white/30 text-xs mb-4">{c.sub}</p>

              {/* Description */}
              <p className="text-white/45 text-sm leading-relaxed flex-1 mb-6">{c.description}</p>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/[0.07]">
                {c.stats.map(([val, lbl]) => (
                  <div key={lbl} className="text-center">
                    <div className="text-white text-xs font-semibold leading-tight">{val}</div>
                    <div className="text-white/25 text-[10px] mt-0.5">{lbl}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link */}
        <div className="text-center">
          <a href="https://metaphasemarketing.com/works" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-amber-400 transition-colors font-medium">
            See full case studies <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
