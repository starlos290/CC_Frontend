'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Shield, Star, Quote } from 'lucide-react'
import type { VerticalPageData } from '@/lib/vertical-page-data'
import RoiCalculator from './roi-calculator'
import Faq from './faq'
import CtaSection from './cta-section'

const automationLabels: Record<string, string> = {
  reminders: 'Appointment Reminder Sequences',
  noshow: 'No-Show Recovery (Aria)',
  reviews: 'Google Review Requests (Vera)',
  reactivation: 'Patient Reactivation (Rex)',
  welcome: 'New Patient Welcome Sequence',
  faq: 'Insurance FAQ Responder',
  'after-hours': 'After-Hours Patient Response',
  campaigns: 'Monthly Promo Campaigns',
}

export default function VerticalPageTemplate({
  data,
}: {
  data: VerticalPageData
}) {
  const accentClass =
    data.accentColor === 'pink'
      ? 'text-pink-400'
      : data.accentColor === 'purple'
      ? 'text-purple-400'
      : data.accentColor === 'blue'
      ? 'text-blue-400'
      : 'text-accent'

  const accentBg =
    data.accentColor === 'pink'
      ? 'bg-pink-500/10 border-pink-500/20'
      : data.accentColor === 'purple'
      ? 'bg-purple-500/10 border-purple-500/20'
      : data.accentColor === 'blue'
      ? 'bg-blue-500/10 border-blue-500/20'
      : 'bg-accent/10 border-accent/20'

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-bg-base" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(40% 50% at 50% 0%, rgba(20,184,166,0.09) 0%, transparent 100%)',
          }}
        />
        <div className="absolute inset-0 bg-grid-dots opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${accentClass}`}>
              ClinicClaw for {data.specialty}
            </p>
            <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6 max-w-4xl mx-auto">
              {data.heroHeadline}
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
              {data.heroSubhead}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.02 }}>
                <Link
                  href={`/apply${data.applyParam}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all shadow-glow text-base"
                >
                  Apply for Early Access
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 text-text-primary font-medium rounded-xl border border-white/10 transition-all text-base"
              >
                See Pricing
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-text-muted">
              <Shield className="w-4 h-4 text-trust" />
              <span>HIPAA-safe · BAA included · Dedicated private VPS · 48hr deploy</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 border-y border-white/5 bg-[#060a15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6">
            {data.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className={`font-sora text-4xl font-bold mb-1 ${accentClass}`}>
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-text-primary">{stat.label}</p>
                <p className="text-xs text-text-muted">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automations included */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${accentClass}`}>
              What&apos;s Included
            </p>
            <h2 className="font-sora text-3xl sm:text-4xl font-bold text-text-primary">
              Automations Built for {data.specialty}
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {data.automations.map((id, i) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-3 px-4 py-3 card-base rounded-xl"
              >
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm text-text-secondary">
                  {automationLabels[id] || id}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative py-24 bg-[#060a15] overflow-hidden">
        <div className="absolute inset-0 bg-grid-dots opacity-15" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center gap-0.5 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <Quote className={`w-8 h-8 mx-auto mb-4 opacity-40 ${accentClass}`} />
            <blockquote className="text-xl sm:text-2xl text-text-primary font-medium leading-relaxed mb-8 italic">
              &ldquo;{data.testimonial.quote}&rdquo;
            </blockquote>
            <div>
              <p className="font-semibold text-text-primary">{data.testimonial.name}</p>
              <p className="text-sm text-text-secondary">{data.testimonial.title}</p>
              <p className="text-sm text-text-muted">{data.testimonial.location}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator */}
      <RoiCalculator
        defaultPatients={data.roiNumbers.patients}
        defaultNoShows={data.roiNumbers.noShows}
        defaultVisitValue={data.roiNumbers.visitValue}
      />

      {/* FAQ */}
      <Faq
        faqs={data.faqs}
        title={`Common Questions from ${data.specialty}`}
      />

      {/* CTA */}
      <CtaSection
        headline={`Ready to Transform Your ${data.specialty} Practice?`}
        subhead={`Join 200+ private practices using ClinicClaw. Your dedicated AI team goes live in 48 hours — no IT, no contracts, full HIPAA compliance.`}
        applyParam={data.applyParam}
      />
    </>
  )
}
