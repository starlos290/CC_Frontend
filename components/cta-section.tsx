'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Shield } from 'lucide-react'

interface CtaSectionProps {
  headline?: string
  subhead?: string
  applyParam?: string
}

export default function CtaSection({
  headline = 'Ready to Stop Losing Revenue to No-Shows?',
  subhead = 'Join 200+ private practices running ClinicClaw. Your dedicated AI team goes live in 48 hours — no IT, no complexity, full HIPAA compliance included.',
  applyParam = '',
}: CtaSectionProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/8 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-dots opacity-40" />

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">
            Get Started
          </p>
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-6">
            {headline}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            {subhead}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={`/apply${applyParam}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all duration-200 shadow-glow hover:shadow-[0_0_32px_rgba(20,184,166,0.45)] text-base"
              >
                Apply for Early Access
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-text-primary font-medium rounded-xl border border-white/10 transition-all text-base"
            >
              See Pricing
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-text-muted">
            <Shield className="w-4 h-4 text-trust" />
            <span>HIPAA-safe · BAA included · Cancel anytime · 48hr deploy</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
