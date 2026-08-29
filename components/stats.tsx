'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'

const stats = [
  { prefix: '$', value: 30, suffix: 'M+', label: 'In Ad Spend Managed',        sub: 'Across Meta, Google, YouTube & TikTok' },
  { prefix: '',  value: 50, suffix: 'M+', label: 'Leads Generated',             sub: 'For clients across 10+ verticals' },
  { prefix: '',  value: 6,  suffix: '+',  label: 'Years of Experience',          sub: 'From lab scientist to marketing operator' },
  { prefix: '',  value: 100, suffix: 'K+',label: 'Leads for a Single Client',   sub: 'Performance at scale, not theory' },
]

function Counter({ value, prefix = '', suffix = '', inView }: { value: number; prefix?: string; suffix?: string; inView: boolean }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const steps = 60, dur = 2000
    let i = 0
    const t = setInterval(() => {
      i++
      setN(Math.min(Math.round((value / steps) * i), value))
      if (i >= steps) clearInterval(t)
    }, dur / steps)
    return () => clearInterval(t)
  }, [inView, value])
  return <span>{prefix}{n}{suffix}</span>
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 bg-bg-base" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <div className="text-center mb-14">
          <span className="badge">By the Numbers</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card p-7 text-center relative overflow-hidden group">

              {/* Top amber line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

              {/* Number */}
              <div className="font-heading text-4xl md:text-5xl font-extrabold text-amber-400 mb-2">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} inView={inView} />
              </div>

              {/* Label */}
              <p className="text-white font-semibold text-sm mb-1">{s.label}</p>
              <p className="text-white/35 text-xs leading-snug">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
