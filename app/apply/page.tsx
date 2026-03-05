'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, CheckCircle2, Shield } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { formatCurrency } from '@/lib/utils'

// ── Data ──────────────────────────────────────────────────────────────────
const specialties = [
  'Chiropractic',
  'Med Spa',
  'Dentistry',
  'Physical Therapy',
  'Mental Health',
  'Orthopedics',
  'Dermatology',
  'Plastic Surgery',
  'Podiatry',
  'Hair Transplant',
  'Laser Hair Removal',
  'LASIK',
  'Wellness Center',
  'Acupuncture',
  'Other',
]

const noShowOptions = ['1–3/wk', '4–7/wk', '8–15/wk', '16+/wk']

const automationOptions = [
  { id: 'reminders', label: 'Appointment Reminders' },
  { id: 'noshow', label: 'No-Show Recovery' },
  { id: 'reviews', label: 'Google Review Requests' },
  { id: 'reactivation', label: 'Patient Reactivation' },
  { id: 'after-hours', label: 'After-Hours Response' },
  { id: 'faq', label: 'Insurance FAQ Bot' },
  { id: 'welcome', label: 'New Patient Welcome' },
  { id: 'campaigns', label: 'Monthly Campaigns' },
]

const timelineOptions = ['ASAP', 'Within 30 days', '1–3 months', 'Just exploring']
const howHeardOptions = ['Google Search', 'Social Media', 'Referral from colleague', 'Conference/Event', 'Podcast', 'Other']

const tiers = [
  {
    id: 'launch',
    name: 'Launch',
    price: '$297/mo',
    setup: '$1,500 setup',
    target: 'Solo practitioners',
    features: ['Aria reminders + no-show recovery', 'Vera review requests', 'After-hours response', 'Dedicated private VPS', 'BAA included'],
  },
  {
    id: 'operate',
    name: 'Operate',
    price: '$797/mo',
    setup: '$3,500 setup',
    target: 'Established practices',
    badge: 'Most Popular',
    features: ['Everything in Launch', 'Rex patient reactivation', 'Insurance FAQ bot', 'Monthly campaigns', 'Sage analytics + KPI reports'],
  },
  {
    id: 'scale',
    name: 'Scale',
    price: 'Custom',
    setup: '$5,000+ setup',
    target: 'Multi-location',
    features: ['Everything in Operate', 'Multi-location management', 'Custom workflows', 'Dedicated account manager', 'API + EHR integration'],
  },
]

// ── Schema ────────────────────────────────────────────────────────────────
const step3Schema = z.object({
  first_name: z.string().min(1, 'Required'),
  last_name: z.string().min(1, 'Required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  practice_name: z.string().optional(),
  city_state: z.string().optional(),
  how_heard: z.string().optional(),
})

type Step3Data = z.infer<typeof step3Schema>

// ── Component ─────────────────────────────────────────────────────────────
export default function ApplyPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  // URL param pre-selection
  const tierParam = searchParams.get('tier') || ''
  const specialtyParam = searchParams.get('specialty') || ''

  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)

  // Step 1
  const [selectedSpecialty, setSelectedSpecialty] = useState(
    specialties.find((s) => s.toLowerCase().replace(/\s/g, '') === specialtyParam.toLowerCase()) || ''
  )
  const [locations, setLocations] = useState(1)
  const [noShows, setNoShows] = useState('')
  const [selectedAutomations, setSelectedAutomations] = useState<string[]>([])

  // Step 2
  const [selectedTier, setSelectedTier] = useState(
    tierParam ? tiers.find((t) => t.id === tierParam)?.id || '' : ''
  )
  const [timeline, setTimeline] = useState('')

  // ROI estimate (based on step 1)
  const noShowCount =
    noShows === '1–3/wk' ? 2 : noShows === '4–7/wk' ? 5 : noShows === '8–15/wk' ? 11 : noShows === '16+/wk' ? 20 : 5
  const avgValue = 185
  const monthlyRecovered = Math.round(noShowCount * 4 * 0.38 * avgValue)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step3Data>({ resolver: zodResolver(step3Schema) })

  const toggleAutomation = (id: string) => {
    setSelectedAutomations((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    )
  }

  const handleStep3Submit = async (data: Step3Data) => {
    setSubmitting(true)
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          specialty: selectedSpecialty,
          locations,
          weekly_noshows: noShows,
          tier: selectedTier,
          timeline,
          interested_automations: selectedAutomations,
        }),
      })

      if (res.ok) {
        router.push('/thank-you')
      } else {
        alert('Something went wrong. Please try again or email hello@clinicclaw.com')
      }
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const stepVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  }

  return (
    <div className="min-h-screen bg-bg-base pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/6 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-dots opacity-20" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            Apply for Early Access
          </p>
          <h1 className="font-sora text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            Let&apos;s Get Your Practice Running on AI
          </h1>
          <p className="text-text-secondary">
            5 minutes. No commitment. Live in 48 hours.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-all ${
                  s < step
                    ? 'bg-accent border-accent text-white'
                    : s === step
                    ? 'border-accent text-accent bg-accent/10'
                    : 'border-white/15 text-text-muted bg-white/3'
                }`}
              >
                {s < step ? <CheckCircle2 className="w-4 h-4" /> : s}
              </div>
              {s < 3 && (
                <div
                  className={`w-12 h-px transition-all ${
                    s < step ? 'bg-accent' : 'bg-white/10'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="bg-[#0d1424] border border-white/7 rounded-2xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
          <AnimatePresence mode="wait">
            {/* ── Step 1 ── */}
            {step === 1 && (
              <motion.div
                key="step1"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.25 }}
                className="p-7 sm:p-9 space-y-8"
              >
                <div>
                  <h2 className="font-sora text-lg font-bold text-text-primary mb-1">
                    About Your Practice
                  </h2>
                  <p className="text-sm text-text-secondary">
                    Help us understand where you&apos;re leaving money on the table.
                  </p>
                </div>

                {/* Specialty */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-3">
                    What type of practice do you run?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {specialties.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSpecialty(s)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-all border ${
                          selectedSpecialty === s
                            ? 'bg-accent/15 border-accent/40 text-accent'
                            : 'bg-white/3 border-white/7 text-text-secondary hover:bg-white/8 hover:text-text-primary'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Locations */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-text-primary">
                      Number of locations
                    </label>
                    <span className="text-sm font-semibold text-accent">{locations}</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={locations}
                    onChange={(e) => setLocations(Number(e.target.value))}
                    className="w-full h-1.5 rounded-full appearance-none bg-white/10 accent-accent cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-text-muted mt-1">
                    <span>1</span><span>10+</span>
                  </div>
                </div>

                {/* Weekly no-shows */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-3">
                    Weekly no-shows (approximate)
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {noShowOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setNoShows(opt)}
                        className={`px-2 py-2.5 rounded-lg text-xs font-medium transition-all border ${
                          noShows === opt
                            ? 'bg-accent/15 border-accent/40 text-accent'
                            : 'bg-white/3 border-white/7 text-text-secondary hover:bg-white/8 hover:text-text-primary'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Automations */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-3">
                    Which automations interest you? (select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {automationOptions.map((a) => (
                      <button
                        key={a.id}
                        onClick={() => toggleAutomation(a.id)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                          selectedAutomations.includes(a.id)
                            ? 'bg-accent/15 border-accent/40 text-accent'
                            : 'bg-white/3 border-white/7 text-text-secondary hover:bg-white/8 hover:text-text-primary'
                        }`}
                      >
                        {a.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={!selectedSpecialty}
                  className="flex items-center gap-2 w-full justify-center px-6 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {/* ── Step 2 ── */}
            {step === 2 && (
              <motion.div
                key="step2"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.25 }}
                className="p-7 sm:p-9 space-y-8"
              >
                <div>
                  <h2 className="font-sora text-lg font-bold text-text-primary mb-1">
                    Your Estimated ROI
                  </h2>
                  <p className="text-sm text-text-secondary">
                    Based on your inputs — conservative estimate.
                  </p>
                </div>

                {/* ROI estimate box */}
                <div className="bg-accent/8 border border-accent/20 rounded-xl p-5 text-center">
                  <p className="text-xs text-text-secondary mb-1">Estimated monthly revenue recovered</p>
                  <p className="font-sora text-4xl font-bold text-accent">
                    {formatCurrency(monthlyRecovered)}
                  </p>
                  <p className="text-xs text-text-muted mt-1">
                    Based on {noShows || '4–7/wk'} no-shows at $185 avg. visit value (38% recovery rate)
                  </p>
                </div>

                {/* Tier selection */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-4">
                    Select your plan
                  </label>
                  <div className="space-y-3">
                    {tiers.map((tier) => (
                      <button
                        key={tier.id}
                        onClick={() => setSelectedTier(tier.id)}
                        className={`w-full text-left p-4 rounded-xl border transition-all ${
                          selectedTier === tier.id
                            ? 'bg-accent/10 border-accent/40'
                            : 'bg-white/3 border-white/7 hover:bg-white/8 hover:border-white/15'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-sm font-semibold text-text-primary">{tier.name}</span>
                              {tier.badge && (
                                <span className="text-[10px] font-bold px-2 py-0.5 bg-accent text-white rounded-full">
                                  {tier.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-text-muted">{tier.target}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-bold text-accent">{tier.price}</p>
                            <p className="text-[10px] text-text-muted">{tier.setup}</p>
                          </div>
                        </div>
                        <ul className="mt-3 space-y-1">
                          {tier.features.map((f, fi) => (
                            <li key={fi} className="flex items-center gap-2 text-xs text-text-secondary">
                              <CheckCircle2 className="w-3 h-3 text-accent shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-3">
                    When are you looking to get started?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {timelineOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setTimeline(opt)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium transition-all border ${
                          timeline === opt
                            ? 'bg-accent/15 border-accent/40 text-accent'
                            : 'bg-white/3 border-white/7 text-text-secondary hover:bg-white/8 hover:text-text-primary'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center gap-2 px-5 py-3.5 bg-white/5 hover:bg-white/10 text-text-secondary rounded-xl border border-white/10 transition-all text-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!selectedTier}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ── Step 3 ── */}
            {step === 3 && (
              <motion.div
                key="step3"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.25 }}
                className="p-7 sm:p-9"
              >
                <div className="mb-7">
                  <h2 className="font-sora text-lg font-bold text-text-primary mb-1">
                    Almost Done
                  </h2>
                  <p className="text-sm text-text-secondary">
                    We&apos;ll reach out within 24 hours to schedule your onboarding.
                  </p>
                </div>

                <form onSubmit={handleSubmit(handleStep3Submit)} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-text-secondary mb-1.5">
                        First name *
                      </label>
                      <input
                        {...register('first_name')}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors"
                        placeholder="Jane"
                      />
                      {errors.first_name && (
                        <p className="text-xs text-red-400 mt-1">{errors.first_name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-text-secondary mb-1.5">
                        Last name *
                      </label>
                      <input
                        {...register('last_name')}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors"
                        placeholder="Smith"
                      />
                      {errors.last_name && (
                        <p className="text-xs text-red-400 mt-1">{errors.last_name.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">
                      Email address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors"
                      placeholder="jane@mypractice.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">
                      Phone number
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors"
                      placeholder="(555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">
                      Practice name
                    </label>
                    <input
                      {...register('practice_name')}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors"
                      placeholder="Align Chiropractic"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">
                      City, State
                    </label>
                    <input
                      {...register('city_state')}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors"
                      placeholder="Denver, CO"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">
                      How did you hear about ClinicClaw?
                    </label>
                    <select
                      {...register('how_heard')}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/50 transition-colors"
                    >
                      <option value="">Select an option</option>
                      {howHeardOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0d1424]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex items-center gap-2 px-5 py-3.5 bg-white/5 hover:bg-white/10 text-text-secondary rounded-xl border border-white/10 transition-all text-sm"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all disabled:opacity-60"
                    >
                      {submitting ? 'Submitting...' : 'Submit Application'}
                      {!submitting && <ArrowRight className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 pt-1">
                    <Shield className="w-3.5 h-3.5 text-trust" />
                    <p className="text-xs text-text-muted">
                      HIPAA-safe · BAA included · No credit card required
                    </p>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
