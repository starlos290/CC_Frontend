'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react'

const plans = [
  {
    name: 'Launch',
    price: '$297',
    period: '/mo',
    setup: '$1,500 setup',
    target: 'Solo practitioners',
    badge: null,
    description: 'The essential AI automation suite for practices ready to stop losing appointments.',
    features: [
      'Appointment reminder sequences (Aria)',
      'No-show recovery SMS (Aria)',
      'Google review requests (Vera)',
      'After-hours patient response',
      'New patient welcome sequence',
      'Dedicated private VPS',
      'BAA + HIPAA compliance',
      '48-hour deployment',
      'Email support',
    ],
    cta: 'Apply for Launch',
    ctaParam: '?tier=launch',
    accent: false,
  },
  {
    name: 'Operate',
    price: '$797',
    period: '/mo',
    setup: '$3,500 setup',
    target: 'Established practices',
    badge: 'Most Popular',
    description: 'The complete AI practice team. Every automation, full analytics, priority support.',
    features: [
      'Everything in Launch, plus:',
      'Patient reactivation (Rex)',
      'Insurance FAQ responder',
      'Monthly promo campaigns',
      'Sage analytics + weekly reports',
      'Monday SMS KPI briefing',
      'Custom message templates',
      'Phone + priority support',
      'Onboarding specialist',
    ],
    cta: 'Apply for Operate',
    ctaParam: '?tier=operate',
    accent: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: '',
    setup: '$5,000+ setup',
    target: 'Multi-location groups',
    badge: null,
    description: 'Enterprise-grade deployment for practices operating across multiple locations.',
    features: [
      'Everything in Operate, plus:',
      'Multi-location management',
      'Custom automation workflows',
      'Dedicated account manager',
      'Advanced analytics dashboard',
      'API + EHR integration',
      'SLA guarantees',
      'Quarterly strategy reviews',
      'Volume pricing',
    ],
    cta: 'Contact for Pricing',
    ctaParam: '?tier=scale',
    accent: false,
  },
]

const included = [
  'Dedicated private VPS — not shared',
  'BAA signed with every plan',
  'Full HIPAA compliance',
  '48-hour deployment',
  'Cancel anytime',
]

interface PricingProps {
  featured?: boolean
}

export default function Pricing({ featured = false }: PricingProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative py-24 overflow-hidden" id="pricing">
      {!featured && (
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent" />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!featured && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
              Pricing
            </p>
            <h2 className="font-sora text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Predictable Pricing. Unpredictable Results.
            </h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">
              No per-message fees, no usage limits, no surprises. One flat monthly rate covers your entire practice.
            </p>
          </motion.div>
        )}

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.accent
                  ? 'bg-[#0d1a2a] border border-accent/30 shadow-[0_0_40px_rgba(20,184,166,0.1)]'
                  : 'bg-[#0d1424] border border-white/7 shadow-card'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-5">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-1">
                  {plan.target}
                </p>
                <h3 className="font-sora text-xl font-bold text-text-primary mb-3">
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-sora text-4xl font-bold text-text-primary">{plan.price}</span>
                  <span className="text-text-secondary pb-1">{plan.period}</span>
                </div>
                <p className="text-xs text-text-muted">{plan.setup}</p>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-6">{plan.description}</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2">
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        fi === 0 && plan.name !== 'Launch'
                          ? 'text-text-muted'
                          : 'text-accent'
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        fi === 0 && plan.name !== 'Launch'
                          ? 'text-text-muted font-medium'
                          : 'text-text-secondary'
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={`/apply${plan.ctaParam}`}
                  className={`flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                    plan.accent
                      ? 'bg-accent hover:bg-accent-dark text-white shadow-glow'
                      : 'bg-white/8 hover:bg-white/15 text-text-primary border border-white/10'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Included with all plans */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 py-5 border-t border-white/5"
        >
          <div className="flex items-center gap-2 text-xs text-text-muted mr-2">
            <Shield className="w-3.5 h-3.5 text-trust" />
            <span className="font-medium text-text-secondary">Included with every plan:</span>
          </div>
          {included.map((item) => (
            <span key={item} className="flex items-center gap-1.5 text-xs text-text-muted">
              <CheckCircle2 className="w-3 h-3 text-trust shrink-0" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
