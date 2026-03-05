'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FaqItem {
  q: string
  a: string
}

const defaultFaqs: FaqItem[] = [
  {
    q: 'Is ClinicClaw actually HIPAA-compliant?',
    a: 'Yes — and we go further than most. Every practice gets a dedicated private VPS, not shared cloud infrastructure. Your patient data never lives on a multi-tenant server. We sign a Business Associate Agreement (BAA) with every plan, and all data is encrypted at rest and in transit.',
  },
  {
    q: 'How long does setup actually take?',
    a: 'We target 48 hours from signed agreement to live agents. Our team handles the full deployment — you don\'t touch a server or write any code. You\'ll have a kickoff call, provide your practice info, and we configure everything to match your protocols.',
  },
  {
    q: 'What EHR or practice management software do you integrate with?',
    a: 'ClinicClaw works alongside your existing software — we don\'t require deep EHR integration for most automations. Appointment reminders, no-show recovery, and review requests work via SMS without needing to access your scheduling system directly. We connect via webhook or API for practices that want deeper sync.',
  },
  {
    q: 'Do patients know they\'re texting an AI?',
    a: 'Messages are branded as coming from your practice name and feel personal and natural. You can choose full transparency or keep the focus on your brand. What patients consistently say is the communication finally feels attentive and human — because the messages are written to sound that way.',
  },
  {
    q: 'Can I customize the messages?',
    a: 'Absolutely. Every message template is editable. We build the initial copy based on your specialty and protocols during onboarding, and you can change tone, timing, or language at any time. Most practices find our defaults work well and require minimal adjustment.',
  },
  {
    q: 'What\'s the difference between the Launch and Operate plans?',
    a: 'Launch ($297/mo) is ideal for solo practitioners or new practices who want the core automations — reminders, no-show recovery, and review requests. Operate ($797/mo) includes the full suite: all 8 automations, Rex reactivation, Sage analytics, monthly campaigns, and priority support. Most practices see ROI within 30 days on either plan.',
  },
  {
    q: 'What if I want to cancel?',
    a: 'No contracts, no long-term commitments. Cancel anytime with 30 days notice. We\'d rather earn your business every month than lock you in. The dedicated VPS is yours while you\'re a customer — no data held hostage.',
  },
  {
    q: 'Do you work with multi-location practices?',
    a: 'Yes — our Scale tier is designed for practices with 2 or more locations. Each location gets its own configuration, phone number, and branding, all managed from a single dashboard. Pricing is custom based on volume and complexity.',
  },
]

interface FaqProps {
  faqs?: FaqItem[]
  title?: string
}

export default function Faq({
  faqs = defaultFaqs,
  title = 'Everything You Need to Know Before Saying Yes',
}: FaqProps) {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#060a15]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-text-primary">
            {title}
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              className={`card-base rounded-xl overflow-hidden transition-all ${
                open === i ? 'border-accent/20' : 'hover:border-white/12'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-medium text-text-primary">{item.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-text-muted shrink-0 transition-transform duration-200 ${
                    open === i ? 'rotate-180 text-accent' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-5 pb-5">
                      <div className="pt-1 border-t border-white/5">
                        <p className="text-sm text-text-secondary leading-relaxed mt-3">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
