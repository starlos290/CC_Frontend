'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What does Carlos Courtney do?',
    a: 'Carlos Courtney is a performance marketing expert and CEO of Metaphase Marketing. He specializes in running paid media campaigns on Meta, Google, YouTube, and TikTok — managing $30M+ in ad spend and generating 50M+ leads for clients across healthcare, eCommerce, and B2B.',
  },
  {
    q: 'How much does it cost to work with Carlos Courtney?',
    a: 'Working with Carlos through Metaphase Marketing starts at $2,500/month plus 10% of ad spend for done-for-you services. 1:1 consulting is available starting at $500/month. He works directly with clients — no account managers, no layers.',
  },
  {
    q: 'What industries does Carlos Courtney work with?',
    a: 'Carlos has worked across healthcare (weight loss centers, medical practices, aesthetics), political campaigns, entertainment (The Game Changers, Netflix), real estate (Keller Williams), and eCommerce. His sweet spot is service businesses doing $1M–$20M in revenue looking to scale.',
  },
  {
    q: 'What results has Carlos Courtney achieved for clients?',
    a: 'Carlos has managed $110,000/month ad campaigns for a Netflix documentary, driven political campaign leads at $3.32 CPL, and achieved 5.6X ROAS for a weight loss center. Across his career: $30M+ in total ad spend managed, 50M+ leads generated, 12M+ fax campaigns sent, $10M+ revenue attributable to his direct response strategies.',
  },
  {
    q: 'What ad platforms does Carlos Courtney specialize in?',
    a: 'Meta Ads (Facebook & Instagram), Google Ads (Search, Display, Shopping), YouTube Ads, TikTok Ads, and Programmatic. He also specializes in offline conversion tracking, Meta CAPI (Conversions API), and full-funnel attribution.',
  },
  {
    q: 'Is Carlos Courtney available for consulting?',
    a: 'Yes. Carlos offers 1:1 consulting starting at $500/month for strategy sessions, account audits, and fractional CMO work. Book a 15-minute discovery call at cal.com/metaphase-marketing/15min.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="card-base border-b border-white/[0.06] last:border-b-0 rounded-none first:rounded-t-2xl last:rounded-b-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-7 py-5 text-left hover:bg-bg-elevated transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-text-primary text-sm md:text-base pr-6">{q}</span>
        <span className="flex-shrink-0 text-accent">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-7 pb-6 text-text-secondary text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  return (
    <section className="py-24 bg-bg-base">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            Everything you need to know about working with Carlos.
          </p>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
