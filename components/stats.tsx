'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Stat {
  prefix?: string
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { prefix: '$', value: 30, suffix: 'M+', label: 'In Ad Spend Managed' },
  { value: 50, suffix: 'M+', label: 'Leads Generated' },
  { value: 6, suffix: '+', label: 'Years in Performance Marketing' },
  { value: 100, suffix: 'K+', label: 'Leads for a Single Client' },
]

function AnimatedNumber({ value, prefix = '', suffix = '', inView }: {
  value: number
  prefix?: string
  suffix?: string
  inView: boolean
}) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let step = 0
    const timer = setInterval(() => {
      step++
      setCurrent(Math.min(Math.round(increment * step), value))
      if (step >= steps) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span>
      {prefix}{current}{suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-bg-base" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card-base p-8 text-center relative overflow-hidden group card-hover"
            >
              {/* Amber top line */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

              <div className="font-heading text-4xl md:text-5xl font-extrabold text-accent mb-2">
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>
              <p className="text-text-secondary text-sm leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
