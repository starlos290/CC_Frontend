'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

interface RoiProps {
  defaultPatients?: number
  defaultNoShows?: number
  defaultVisitValue?: number
}

export default function RoiCalculator({
  defaultPatients = 120,
  defaultNoShows = 8,
  defaultVisitValue = 185,
}: RoiProps) {
  const [patients, setPatients] = useState(defaultPatients)
  const [noShows, setNoShows] = useState(defaultNoShows)
  const [visitValue, setVisitValue] = useState(defaultVisitValue)

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  // Calculations
  const recoveredNoShows = Math.round(noShows * 0.38)
  const monthlyRecovered = recoveredNoShows * visitValue
  const reviewsGained = Math.round(patients * 0.03 * 3)
  const reactedPatients = Math.round(patients * 0.08 * 0.41)
  const reactivationRevenue = reactedPatients * visitValue
  const totalMonthlyRecovered = monthlyRecovered + reactivationRevenue

  const operateCost = 797
  const roi = Math.round(((totalMonthlyRecovered - operateCost) / operateCost) * 100)

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
            ROI Calculator
          </p>
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            See Exactly What ClinicClaw Is Worth to Your Practice
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            Adjust the inputs to match your practice. These estimates are conservative.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-base rounded-2xl p-8 space-y-8"
          >
            <h3 className="font-sora text-lg font-semibold text-text-primary">
              Your Practice
            </h3>

            {/* Patients per month */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-text-primary">
                  Monthly patient visits
                </label>
                <span className="text-sm font-semibold text-accent">{patients}</span>
              </div>
              <input
                type="range"
                min={30}
                max={500}
                step={10}
                value={patients}
                onChange={(e) => setPatients(Number(e.target.value))}
                className="w-full h-1.5 rounded-full appearance-none bg-white/10 accent-accent cursor-pointer"
              />
              <div className="flex justify-between text-xs text-text-muted mt-1">
                <span>30</span><span>500</span>
              </div>
            </div>

            {/* Weekly no-shows */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-text-primary">
                  Weekly no-shows
                </label>
                <span className="text-sm font-semibold text-accent">{noShows}</span>
              </div>
              <input
                type="range"
                min={1}
                max={40}
                step={1}
                value={noShows}
                onChange={(e) => setNoShows(Number(e.target.value))}
                className="w-full h-1.5 rounded-full appearance-none bg-white/10 accent-accent cursor-pointer"
              />
              <div className="flex justify-between text-xs text-text-muted mt-1">
                <span>1</span><span>40</span>
              </div>
            </div>

            {/* Average visit value */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-text-primary">
                  Average visit value
                </label>
                <span className="text-sm font-semibold text-accent">
                  {formatCurrency(visitValue)}
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={1000}
                step={10}
                value={visitValue}
                onChange={(e) => setVisitValue(Number(e.target.value))}
                className="w-full h-1.5 rounded-full appearance-none bg-white/10 accent-accent cursor-pointer"
              />
              <div className="flex justify-between text-xs text-text-muted mt-1">
                <span>$50</span><span>$1,000</span>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {/* Primary ROI */}
            <div className="card-base rounded-2xl p-8 border border-accent/20">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary mb-1">Estimated monthly revenue recovered</p>
                  <motion.p
                    key={totalMonthlyRecovered}
                    initial={{ scale: 0.95, opacity: 0.7 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="font-sora text-4xl font-bold text-accent"
                  >
                    {formatCurrency(totalMonthlyRecovered)}
                  </motion.p>
                </div>
              </div>
              <motion.p
                key={roi}
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                className="text-sm text-text-secondary"
              >
                That's a{' '}
                <span className="text-accent font-semibold">{roi}% ROI</span>{' '}
                on the Operate plan at $797/mo
              </motion.p>
            </div>

            {/* Breakdown cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  label: 'No-shows recovered/wk',
                  value: recoveredNoShows,
                  sub: `at ${formatCurrency(visitValue)}/visit`,
                },
                {
                  label: 'Est. new reviews/mo',
                  value: reviewsGained,
                  sub: 'via Vera agent',
                },
                {
                  label: 'Patients reactivated',
                  value: reactedPatients,
                  sub: 'per month via Rex',
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="card-base rounded-xl p-4 text-center"
                >
                  <motion.p
                    key={item.value}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="font-sora text-2xl font-bold text-accent"
                  >
                    {item.value}
                  </motion.p>
                  <p className="text-[11px] text-text-primary font-medium mt-0.5 leading-tight">
                    {item.label}
                  </p>
                  <p className="text-[10px] text-text-muted mt-0.5">{item.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div whileHover={{ scale: 1.01 }}>
              <Link
                href="/apply"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all shadow-glow text-base"
              >
                Claim This Revenue
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <p className="text-center text-xs text-text-muted">
              Conservative estimates based on 200+ deployed practices. Results vary by specialty.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
