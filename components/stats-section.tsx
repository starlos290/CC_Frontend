'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useCountUp } from '@/lib/utils'

const stats = [
  {
    value: 200,
    suffix: '+',
    label: 'Practices Deployed',
    sub: 'Across the US and Canada',
  },
  {
    value: 38,
    suffix: '%',
    label: 'Avg. No-Show Reduction',
    sub: '35–40% across all specialties',
  },
  {
    value: 4.2,
    suffix: 'x',
    label: 'More Google Reviews',
    sub: 'vs. pre-ClinicClaw baseline',
  },
  {
    value: 41,
    suffix: '%',
    label: 'SMS Response Rate',
    sub: 'Patient reactivation by Rex',
  },
  {
    value: 48,
    suffix: 'hr',
    label: 'Deploy Time',
    sub: 'From signup to live agents',
  },
  {
    value: 4.9,
    suffix: '/5',
    label: 'Average Rating',
    sub: 'Across all practice reviews',
  },
]

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const count = useCountUp(stat.value, isInView, 1500)

  const displayValue =
    stat.value % 1 !== 0
      ? count.toFixed(1)
      : Math.round(count).toString()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group card-base card-hover rounded-2xl p-6 text-center"
    >
      <div className="font-sora text-4xl font-bold text-accent mb-2">
        {displayValue}
        <span className="text-3xl">{stat.suffix}</span>
      </div>
      <p className="text-sm font-semibold text-text-primary mb-1">{stat.label}</p>
      <p className="text-xs text-text-muted">{stat.sub}</p>
    </motion.div>
  )
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            Results That Matter
          </p>
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-text-primary">
            Numbers Private Practices Actually Care About
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
