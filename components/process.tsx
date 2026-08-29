'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Diagnose',
    description:
      'Analyze current marketing, sales, and operational data. Find the short-term wins with outsized impact.',
  },
  {
    num: '02',
    title: 'Architect',
    description:
      'Build the campaign structure, funnel, tracking, and creative strategy. Nothing launches without a blueprint.',
  },
  {
    num: '03',
    title: 'Launch',
    description:
      'Deploy campaigns with precision. Every ad set, audience, and creative tested against clear KPIs.',
  },
  {
    num: '04',
    title: 'Optimize',
    description:
      'Daily monitoring, weekly reporting. Cut what doesn\'t work. Scale what does.',
  },
  {
    num: '05',
    title: 'Scale',
    description:
      'Once we have a proven system, we pour fuel on it. More budget, more channels, more revenue.',
  },
]

export default function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" className="py-24 bg-bg-base" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            How I Grow Your <span className="text-gradient-gold">Business</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            I don&apos;t believe in &ldquo;launch and pray.&rdquo; I engineer growth with precision.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-14 space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="card-base card-hover p-7 flex items-start gap-6 group"
            >
              {/* Number */}
              <div className="font-heading text-4xl font-extrabold text-accent/20 group-hover:text-accent/40 transition-colors flex-shrink-0 w-16 leading-none">
                {step.num}
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
