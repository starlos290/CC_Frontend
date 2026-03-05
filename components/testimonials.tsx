'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Dr. Michael Kowalski',
    title: 'Owner, Align Chiropractic',
    location: 'Denver, CO',
    specialty: 'Chiropractic',
    quote:
      "We were losing 8–10 appointments a week to no-shows. ClinicClaw cut that to 2–3. The ROI paid for itself in the first month. The setup really was done in two days — I didn't touch anything.",
    stars: 5,
    stat: '72% fewer no-shows',
  },
  {
    name: 'Jennifer Tran',
    title: 'Practice Manager, Radiance Med Spa',
    location: 'Austin, TX',
    specialty: 'Med Spa',
    quote:
      "Our Google reviews went from 47 to 180 in 90 days. Vera just works. Patients get a friendly text after their visit and the reviews roll in. Our competitor has been in business longer and we outrank them now.",
    stars: 5,
    stat: '4x Google review volume',
  },
  {
    name: 'Dr. Sandra Osei',
    title: 'Owner, Osei Family Dental',
    location: 'Atlanta, GA',
    specialty: 'Dentistry',
    quote:
      "Rex reactivated 34 patients in the first month alone. These were people I'd written off. At our average visit value, that's over $12,000 in revenue we literally would have lost. It's unreal.",
    stars: 5,
    stat: '$12k recovered in month one',
  },
  {
    name: 'Carlos Mendes, PT, DPT',
    title: 'Director, ProMotion Physical Therapy',
    location: 'Phoenix, AZ',
    specialty: 'Physical Therapy',
    quote:
      "The insurance FAQ bot alone saves my front desk 2 hours a day. We get the same 15 questions every single day. Now Aria handles them at 11pm, on weekends, whenever. My staff is less stressed and patients actually get faster answers.",
    stars: 5,
    stat: '2hrs/day saved at front desk',
  },
  {
    name: 'Dr. Aisha Patel',
    title: 'Founder, Mindful Mental Health Group',
    location: 'Chicago, IL',
    specialty: 'Mental Health',
    quote:
      "HIPAA compliance was the reason we hesitated. Once we understood every practice gets a private VPS — not shared infrastructure — and the BAA was right there in the contract, it was an easy decision. Our patients' data is truly private.",
    stars: 5,
    stat: 'HIPAA-safe from day one',
  },
  {
    name: 'Dr. Thomas Reyes',
    title: 'Owner, Reyes Orthopedic Surgery Center',
    location: 'Miami, FL',
    specialty: 'Orthopedics',
    quote:
      "I was skeptical about AI for a surgical practice. But we customized the messages to match our exact protocols and it just feels like us. Patients compliment the communication all the time. My office manager actually sleeps better now.",
    stars: 5,
    stat: '38% no-show reduction',
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#060a15]" />
      <div className="absolute inset-0 bg-grid-dots opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            Real Practices, Real Results
          </p>
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            What Happens When Practices Stop <br className="hidden sm:block" />
            Leaving Revenue on the Table
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group card-base card-hover rounded-2xl p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(t.stars)].map((_, si) => (
                  <Star key={si} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="w-6 h-6 text-accent/30 mb-3" />

              {/* Quote text */}
              <blockquote className="text-sm text-text-secondary leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Stat */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/8 border border-accent/15 rounded-full mb-5">
                <span className="text-xs font-semibold text-accent">{t.stat}</span>
              </div>

              {/* Attribution */}
              <div className="border-t border-white/5 pt-4">
                <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                <p className="text-xs text-text-secondary">{t.title}</p>
                <p className="text-xs text-text-muted">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
