'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Shield, Star, Zap } from 'lucide-react'
import PhoneMockup from './phone-mockup'
import { InfiniteSlider } from './infinite-slider'

const specialtyMarquee = [
  'Chiropractors',
  'Med Spas',
  'Dentists',
  'Physical Therapy',
  'Mental Health Practices',
  'Orthopedics',
  'Dermatologists',
  'Plastic Surgery',
  'Podiatrists',
  'LASIK Centers',
  'Wellness Centers',
  'Hair Transplant',
  'Acupuncture',
  'Laser Hair Removal',
]

const heroMessages = [
  {
    from: 'practice' as const,
    text: 'Hi Dr. Chen — reminder your appointment is tomorrow at 2pm. Reply C to confirm.',
    time: '2:14 PM',
  },
  { from: 'patient' as const, text: 'C', time: '2:16 PM' },
  {
    from: 'practice' as const,
    text: 'Confirmed! See you tomorrow. Park in Lot B — directions in your intake email.',
    time: '2:16 PM',
  },
]

const floatingStats = [
  { label: 'No-shows reduced', value: '38%', sub: 'avg. across practices' },
  { label: 'Reviews generated', value: '4.2x', sub: 'more per month' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-16 overflow-hidden">
      {/* ── Background layer ── */}
      <div className="absolute inset-0 bg-bg-base" />
      {/* Top radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(45% 55% at 50% 0%, rgba(20,184,166,0.10) 0%, transparent 100%)',
        }}
      />
      {/* Animated wisp 1 */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-[10%] left-[20%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 65%)',
        }}
        animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.07, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Animated wisp 2 */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 65%)',
        }}
        animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      {/* Grid dots */}
      <div aria-hidden="true" className="absolute inset-0 bg-grid-dots opacity-25 pointer-events-none" />

      {/* ── Decorative vertical border lines (inspired by hero-1) ── */}
      <div aria-hidden="true" className="absolute inset-0 mx-auto max-w-7xl hidden lg:block pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-4 w-px bg-gradient-to-b from-transparent via-white/5 to-white/5 md:left-8" />
        <div className="absolute inset-y-0 right-4 w-px bg-gradient-to-b from-transparent via-white/5 to-white/5 md:right-8" />
        <div className="absolute inset-y-0 left-8 w-px bg-gradient-to-b from-transparent via-white/[0.03] to-white/[0.03] hidden md:block md:left-12" />
        <div className="absolute inset-y-0 right-8 w-px bg-gradient-to-b from-transparent via-white/[0.03] to-white/[0.03] hidden md:block md:right-12" />
      </div>

      {/* ── Main content ── */}
      <div className="relative flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-[55fr_45fr] gap-14 items-center">
            {/* Left: copy */}
            <div>
              {/* Announcement pill */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-7"
              >
                <Link
                  href="/automations"
                  className="group inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs hover:bg-white/8 transition-all shadow-sm"
                >
                  <Zap className="w-3 h-3 text-accent shrink-0" />
                  <span className="text-text-secondary">
                    Max AI Receptionist —{' '}
                    <span className="text-text-primary font-medium">coming soon</span>
                  </span>
                  <span className="block h-4 border-l border-white/15" />
                  <ArrowRight className="w-3 h-3 text-text-muted group-hover:translate-x-0.5 transition-transform duration-150" />
                </Link>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, filter: 'blur(4px)', y: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.08] tracking-tight mb-6"
              >
                Your 24/7 AI Employee{' '}
                <span className="text-gradient-teal block sm:inline">
                  for Private Practices
                </span>
              </motion.h1>

              {/* Subhead */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-8 max-w-xl"
              >
                HIPAA-safe AI agents handle appointment reminders, no-show
                recovery, Google review requests, and patient reactivation —
                all live in 48 hours with zero IT setup.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex flex-col sm:flex-row gap-3 mb-10"
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/apply"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all shadow-glow hover:shadow-[0_0_32px_rgba(20,184,166,0.45)] text-base"
                  >
                    Apply for Early Access
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
                <Link
                  href="/automations"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 text-text-primary font-medium rounded-xl border border-white/10 transition-all text-base"
                >
                  See the Automations
                </Link>
              </motion.div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-4"
              >
                <div className="flex -space-x-2">
                  {['DK', 'SM', 'JR', 'AT', 'PW'].map((initials, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/30 to-accent-dark/30 border-2 border-bg-base flex items-center justify-center"
                    >
                      <span className="text-[9px] font-semibold text-accent">{initials}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-semibold text-text-primary ml-1">4.9</span>
                  </div>
                  <p className="text-xs text-text-muted">200+ practices deployed</p>
                </div>
              </motion.div>
            </div>

            {/* Right: phone + floating stat cards */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <PhoneMockup messages={heroMessages} />

                {floatingStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.15, duration: 0.4 }}
                    className={`absolute ${
                      i === 0
                        ? '-left-10 top-16 sm:-left-16'
                        : '-right-10 bottom-24 sm:-right-16'
                    } bg-[#0d1424] border border-white/10 rounded-xl px-3 py-2.5 shadow-xl min-w-[130px]`}
                  >
                    <p className="font-sora text-xl font-bold text-accent">{stat.value}</p>
                    <p className="text-xs font-medium text-text-primary">{stat.label}</p>
                    <p className="text-[10px] text-text-muted">{stat.sub}</p>
                  </motion.div>
                ))}

                {/* HIPAA badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.3 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-trust/10 border border-trust/20 rounded-full px-4 py-1.5 whitespace-nowrap"
                >
                  <Shield className="w-3.5 h-3.5 text-trust" />
                  <span className="text-xs font-semibold text-trust">HIPAA-Safe · BAA Included</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Specialty marquee (inspired by logo-cloud-3) ── */}
      <div className="relative border-t border-white/5 pt-5 pb-6">
        <p className="text-xs text-text-muted text-center mb-4">
          Serving private practices across{' '}
          <span className="text-text-secondary">14+ specialties</span>
        </p>
        <InfiniteSlider
          gap={12}
          duration={40}
          durationOnHover={90}
          className="[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        >
          {specialtyMarquee.map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-2 text-xs font-medium text-text-muted whitespace-nowrap px-3 py-1.5 bg-white/3 border border-white/7 rounded-full"
            >
              <CheckCircle2 className="w-3 h-3 text-accent/60 shrink-0" />
              {s}
            </span>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  )
}
