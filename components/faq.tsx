'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'What does Carlos Courtney do?',
    a: 'Carlos Courtney is a performance marketing expert and CEO of Metaphase Marketing. He specializes in paid media on Meta, Google, YouTube, and TikTok — managing $30M+ in ad spend and generating 50M+ leads for clients across healthcare, eCommerce, and B2B.',
  },
  {
    q: 'How much does it cost to work with Carlos Courtney?',
    a: 'Metaphase Marketing starts at $2,500/month plus 10% of ad spend for done-for-you services. 1:1 consulting is available starting at $500/month. Carlos works directly with every client — no account managers, no layers.',
  },
  {
    q: 'What industries does Carlos Courtney work with?',
    a: "Carlos has delivered results across healthcare (weight loss, aesthetics, medical practices), political campaigns, entertainment (The Game Changers, Netflix), real estate (Keller Williams), and eCommerce. His sweet spot is service businesses doing $1M–$20M in revenue.",
  },
  {
    q: 'What results has Carlos Courtney achieved for clients?',
    a: 'He managed a $110K/month Netflix documentary ad campaign, drove political leads at $3.32 CPL, and sustained 5.6X ROAS for a weight loss clinic. Across his career: $30M+ in ad spend managed, 50M+ leads generated, 12M+ fax campaigns sent.',
  },
  {
    q: 'What ad platforms does Carlos Courtney specialize in?',
    a: 'Meta (Facebook & Instagram), Google Ads (Search, Display, Shopping), YouTube, TikTok, and Programmatic. He also specializes in offline conversion tracking, Meta CAPI, and full-funnel attribution — not just clicks, but actual revenue.',
  },
  {
    q: 'Is Carlos Courtney available for consulting?',
    a: 'Yes. 1:1 consulting starts at $500/month for strategy sessions, account audits, and fractional CMO work. Book a 15-minute discovery call at cal.com/metaphase-marketing/15min — no pitch, just strategy.',
  },
]

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/[0.07]">
      <button onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group">
        <span className="text-white/80 font-semibold text-base group-hover:text-white transition-colors">{q}</span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-white/15 flex items-center justify-center transition-all duration-200 mt-0.5 ${open ? 'bg-amber-500 border-amber-500' : 'group-hover:border-white/30'}`}>
          <Plus size={12} className={`text-black transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
            style={{ color: open ? 'black' : 'rgba(255,255,255,0.5)' }} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden">
            <p className="text-white/45 text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative py-28 bg-bg-base">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* JSON-LD FAQ schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      })}} />

      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge mb-4">FAQ</span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="card px-6">
          {faqs.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  )
}
