'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, ArrowRight } from 'lucide-react'

const cases = [
  {
    tag: 'Entertainment / Film Marketing',
    result: '$110K/mo Multi-Platform Campaign',
    client: 'The Game Changers',
    sub: 'Netflix film by James Cameron, Arnold Schwarzenegger, Jackie Chan',
    details: '$70K/mo Meta · $30K/mo Google Ads · $10K/mo YouTube',
    description:
      'Took a revolutionary documentary about plant-based performance and made it go viral across every major ad platform.',
  },
  {
    tag: 'Political Advertising',
    result: '$3.32 Cost Per Lead',
    client: 'Political Campaign',
    sub: 'Digital reach at scale',
    details: 'Below-average CPL in a high-competition vertical',
    description:
      'Scaled a political campaign\'s digital reach with highly targeted paid media, driving leads at a fraction of industry average.',
  },
  {
    tag: 'Healthcare / Weight Loss',
    result: '5.6X Average ROAS',
    client: 'Weight Loss Center',
    sub: 'Multi-channel funnel strategy',
    details: 'Consistent 5.6X return on ad spend over 6+ months',
    description:
      'Built a complete funnel from cold traffic to booked appointments for a weight loss clinic. Multi-channel strategy across Meta and Google.',
  },
]

export default function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="works" className="py-24 bg-bg-elevated" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Results That Speak for{' '}
            <span className="text-gradient-gold">Themselves</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Real campaigns. Real numbers. No smoke, no mirrors.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {cases.map((c, i) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="card-base card-hover relative overflow-hidden flex flex-col"
            >
              {/* Top amber line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-xs text-accent font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20">
                    {c.tag}
                  </span>
                  <TrendingUp size={18} className="text-accent/50 flex-shrink-0" />
                </div>

                <h3 className="font-heading text-xl font-bold text-text-primary mb-1">
                  {c.client}
                </h3>
                <p className="text-text-muted text-xs mb-4">{c.sub}</p>

                <div className="font-heading text-2xl font-extrabold text-accent mb-2">
                  {c.result}
                </div>
                <p className="text-text-muted text-xs mb-4">{c.details}</p>

                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  {c.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a
            href="https://metaphasemarketing.com/works"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-semibold text-sm transition-colors"
          >
            See full case studies
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
