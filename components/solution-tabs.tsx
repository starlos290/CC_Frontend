'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Clock, Star, RefreshCw, MessageSquare, Users, HelpCircle, UserCheck, Megaphone } from 'lucide-react'
import PhoneMockup from './phone-mockup'

const automations = [
  {
    id: 'after-hours',
    icon: Clock,
    label: 'After-Hours Response',
    badge: '24/7',
    headline: 'Never Miss a Patient Inquiry Again',
    description:
      'Aria responds to every after-hours inquiry instantly — insurance questions, appointment requests, directions, and FAQs. Patients feel cared for; your team handles it in the morning.',
    stat: '< 10 sec',
    statLabel: 'response time',
    messages: [
      { from: 'patient' as const, text: 'Hi, do you accept Aetna insurance? It\'s 8pm and I need to book soon.' },
      { from: 'practice' as const, text: 'Hi! Yes, we accept Aetna PPO and HMO. You can book online at our portal or I can take down your info for the team to call first thing tomorrow.', time: 'Instantly' },
      { from: 'patient' as const, text: 'That\'s great, please have them call me!' },
    ],
  },
  {
    id: 'reminders',
    icon: MessageSquare,
    label: 'Appointment Reminders',
    badge: 'Aria',
    headline: 'Reminders That Actually Get Confirmed',
    description:
      'Aria sends a perfectly timed 3-touch SMS sequence — 24 hours, 2 hours, and 1 hour before each appointment. Patients confirm with a single reply. No phone tag, no voicemail.',
    stat: '35–40%',
    statLabel: 'no-show reduction',
    messages: [
      { from: 'practice' as const, text: 'Reminder: You\'re confirmed with Dr. Patel tomorrow at 10am. Reply C to confirm or R to reschedule.', time: '24h before' },
      { from: 'patient' as const, text: 'C' },
      { from: 'practice' as const, text: 'Perfect! See you tomorrow at 10am. Any questions? We\'re here.', time: 'Instantly' },
    ],
  },
  {
    id: 'noshow',
    icon: RefreshCw,
    label: 'No-Show Recovery',
    badge: 'Aria',
    headline: '40% of No-Shows Rebook Within the Hour',
    description:
      'When a patient misses their appointment, Aria texts them within 10 minutes with a rebook offer. No confrontation, no awkward calls — just a friendly nudge that converts.',
    stat: '40%',
    statLabel: 'no-shows rebook',
    messages: [
      { from: 'practice' as const, text: 'Hi Sarah — we missed you today! Life happens. Would you like to reschedule? Reply YES and we\'ll find you the next available slot.', time: '10 min after' },
      { from: 'patient' as const, text: 'YES please, so sorry!' },
      { from: 'practice' as const, text: 'No worries at all! Dr. Kim has Thursday at 2pm or Friday at 11am. Which works?' },
    ],
  },
  {
    id: 'reviews',
    icon: Star,
    label: 'Google Reviews',
    badge: 'Vera',
    headline: '3–5x More Google Reviews, on Autopilot',
    description:
      'Vera texts every patient 4 hours after their visit with a personal-feeling review request. Happy patients leave reviews. Vera handles the follow-up so you never have to ask.',
    stat: '3–5x',
    statLabel: 'review volume',
    messages: [
      { from: 'practice' as const, text: 'Hi James! Hope your visit with Dr. Nguyen went well today. If you have 30 seconds, an honest Google review means the world to our small practice.', time: '4hr post-visit' },
      { from: 'patient' as const, text: 'Of course! Dr. Nguyen was fantastic. Where do I leave it?' },
      { from: 'practice' as const, text: 'Thank you so much! Here\'s the direct link: [Review Link]' },
    ],
  },
  {
    id: 'welcome',
    icon: Users,
    label: 'New Patient Welcome',
    badge: 'Aria',
    headline: 'First Impressions That Build Trust',
    description:
      'New patients receive a warm 3-message welcome sequence — intake form link, directions and parking, and what to expect. They arrive prepared and you save time on intake.',
    stat: '89%',
    statLabel: 'intake form completion',
    messages: [
      { from: 'practice' as const, text: 'Welcome to Align Chiropractic, Alex! Dr. Kim is looking forward to meeting you. Please fill out your intake form: [Link]', time: 'At booking' },
      { from: 'practice' as const, text: '24 hours before your visit: We\'re at 123 Main St, Suite 200. Park in the back lot — it\'s free.', time: '24h before' },
      { from: 'patient' as const, text: 'Got it, thank you! Form is done.' },
    ],
  },
  {
    id: 'faq',
    icon: HelpCircle,
    label: 'Insurance FAQ',
    badge: '24/7',
    headline: 'Answer the 20 Questions Your Staff Fields Every Day',
    description:
      'ClinicClaw handles your top insurance and practice FAQs instantly — accepted plans, copays, what to bring, cancellation policy. Staff spend their time on what matters.',
    stat: '< 5 sec',
    statLabel: 'avg. response time',
    messages: [
      { from: 'patient' as const, text: 'Do I need a referral to see a chiropractor? My PCP is through Blue Cross.' },
      { from: 'practice' as const, text: 'Great question! Blue Cross PPO plans don\'t require a referral for chiropractic care. Blue Cross HMO plans do. Which plan do you have?', time: 'Instantly' },
      { from: 'patient' as const, text: 'PPO — perfect! How much is a copay usually?' },
    ],
  },
  {
    id: 'reactivation',
    icon: UserCheck,
    label: 'Patient Reactivation',
    badge: 'Rex',
    headline: '41% of Dormant Patients Come Back',
    description:
      'Rex identifies patients who haven\'t visited in 60+ days and sends a personalized reactivation message. At a 41% SMS response rate, this is often the highest-ROI automation in the suite.',
    stat: '41%',
    statLabel: 'SMS response rate',
    messages: [
      { from: 'practice' as const, text: 'Hi Maria — it\'s been a few months since your last visit. We\'ve missed you! Dr. Patel has openings this week. Would you like to get back on track?', time: 'Auto-triggered' },
      { from: 'patient' as const, text: 'Oh yes! I\'ve been meaning to call. What\'s available Thursday?' },
      { from: 'practice' as const, text: 'Thursday we have 9am, 1pm, or 3:30pm. Which works best?' },
    ],
  },
  {
    id: 'campaigns',
    icon: Megaphone,
    label: 'Promo Campaigns',
    badge: 'Monthly',
    headline: 'Drive Revenue With Seasonal Campaigns',
    description:
      'Launch monthly SMS campaigns to your patient list — back-to-school physicals, new year wellness packages, referral programs, and seasonal offers. Set it once, deploy in minutes.',
    stat: '28%',
    statLabel: 'avg. campaign open rate',
    messages: [
      { from: 'practice' as const, text: 'Happy New Year from Align Chiropractic! Start 2025 right — schedule your wellness check and get $30 off your first visit this January.', time: 'Jan 2nd' },
      { from: 'patient' as const, text: 'I\'ve been meaning to come in. Can I use this for my husband too?' },
      { from: 'practice' as const, text: 'Absolutely! This offer is good for new and returning patients. Book here: [Link]' },
    ],
  },
]

export default function SolutionTabs() {
  const [active, setActive] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const current = automations[active]
  const Icon = current.icon

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent/4 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            8 Automations
          </p>
          <h2 className="font-sora text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Everything Running Before You Finish Your First Coffee
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Pre-built, pre-tested, and configured for your specialty. Your team switches them on — ClinicClaw does the rest.
          </p>
        </motion.div>

        {/* Tab pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {automations.map((a, i) => {
            const TabIcon = a.icon
            return (
              <button
                key={a.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  active === i
                    ? 'bg-accent text-white'
                    : 'bg-white/5 text-text-secondary hover:bg-white/10 hover:text-text-primary border border-white/7'
                }`}
              >
                <TabIcon className="w-3.5 h-3.5 shrink-0" />
                {a.label}
              </button>
            )
          })}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid lg:grid-cols-[1fr_auto] gap-10 items-center bg-[#0d1424] border border-white/7 rounded-2xl p-8 lg:p-10"
          >
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                  {current.badge}
                </span>
              </div>
              <h3 className="font-sora text-2xl font-bold text-text-primary mb-3">
                {current.headline}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                {current.description}
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 border border-accent/20 rounded-xl px-4 py-3">
                  <p className="font-sora text-2xl font-bold text-accent">{current.stat}</p>
                  <p className="text-xs text-text-secondary">{current.statLabel}</p>
                </div>
              </div>
            </div>

            {/* Right: phone */}
            <div className="flex justify-center lg:justify-end">
              <PhoneMockup messages={current.messages} title={`${current.label} — Aria`} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
