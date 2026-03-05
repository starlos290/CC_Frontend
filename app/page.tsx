import type { Metadata } from 'next'
import Hero from '@/components/hero'
import StatsSection from '@/components/stats-section'
import SolutionTabs from '@/components/solution-tabs'
import Testimonials from '@/components/testimonials'
import RoiCalculator from '@/components/roi-calculator'
import Pricing from '@/components/pricing'
import Faq from '@/components/faq'
import CtaSection from '@/components/cta-section'
import HipaaBadge from '@/components/hipaa-badge'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'ClinicClaw — Your 24/7 AI Employee for Private Practices',
  description:
    'ClinicClaw deploys HIPAA-safe AI agents for private healthcare practices. Cut no-shows 35–40%, generate 3–5x more Google reviews, reactivate dormant patients. Live in 48 hours.',
}

// How It Works steps
const howItWorksSteps = [
  {
    step: '01',
    title: 'Apply in 5 Minutes',
    description:
      'Tell us about your practice — specialty, location, weekly no-shows, what automations interest you most. No commitment required.',
  },
  {
    step: '02',
    title: 'We Configure Everything',
    description:
      'Your dedicated deployment specialist customizes every message, timing, and workflow to your practice. You review and approve.',
  },
  {
    step: '03',
    title: 'Go Live in 48 Hours',
    description:
      'Your AI agents are live. Aria starts handling reminders and no-shows. Vera starts collecting reviews. Rex starts reactivating patients.',
  },
]

// Agent cards
const agents = [
  {
    name: 'Aria',
    role: 'Front Desk AI',
    color: 'teal',
    tagline: 'Appointment reminders, no-show recovery, missed call text-back',
    detail: 'Aria manages the entire patient communication lifecycle — from booking confirmation to post-visit follow-up. She never sleeps, never calls in sick, and always responds in seconds.',
  },
  {
    name: 'Vera',
    role: 'Reputation Manager',
    color: 'emerald',
    tagline: '3–5x more Google reviews, automatically',
    detail: 'Vera knows exactly when to ask for a review — 4 hours post-visit, when patient satisfaction is highest. Her natural-sounding messages generate reviews that read authentic because they are.',
  },
  {
    name: 'Rex',
    role: 'Reactivation Specialist',
    color: 'teal',
    tagline: 'Re-engages dormant patients at 41% SMS response rate',
    detail: 'Rex monitors your patient list and reaches out to anyone who hasn\'t visited in 60+ days with a personalized, non-pushy message. The highest-ROI automation in the suite.',
  },
  {
    name: 'Sage',
    role: 'Analytics Brain',
    color: 'emerald',
    tagline: 'Practice health scoring + Monday KPI briefing',
    detail: 'Sage synthesizes your automation performance into a weekly practice health score and sends your team a concise Monday SMS briefing. No login required — insights come to you.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Stats */}
      <StatsSection />

      {/* HIPAA badges */}
      <section className="py-12 border-y border-white/5 bg-[#080c18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HipaaBadge />
        </div>
      </section>

      {/* Automations showcase */}
      <SolutionTabs />

      {/* How it works */}
      <section className="relative py-24 overflow-hidden bg-[#060a15]">
        <div className="absolute inset-0 bg-grid-dots opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
              How It Works
            </p>
            <h2 className="font-sora text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              From Application to Live Agents in 48 Hours
            </h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">
              We handle the entire setup. You don&apos;t touch a server or write a single line of code.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorksSteps.map((step, i) => (
              <div
                key={step.step}
                className="relative card-base card-hover rounded-2xl p-7 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="font-sora text-5xl font-bold text-white/5 mb-4 leading-none select-none">
                  {step.step}
                </div>
                <div className="absolute top-7 left-7 w-8 h-8 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center mb-4">
                  <span className="text-xs font-bold text-accent">{step.step}</span>
                </div>
                <div className="mt-12">
                  <h3 className="font-sora text-lg font-bold text-text-primary mb-3">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-accent/4 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
              Meet Your AI Team
            </p>
            <h2 className="font-sora text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Four Specialists. One Monthly Rate.
            </h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">
              Each agent has a defined role, defined outcomes, and defined KPIs. They report to Sage every week.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {agents.map((agent, i) => (
              <div
                key={agent.name}
                className="card-base card-hover rounded-2xl p-6 flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center mb-4">
                  <span className="font-sora text-sm font-bold text-accent">{agent.name[0]}</span>
                </div>
                <p className="font-sora text-lg font-bold text-text-primary">{agent.name}</p>
                <p className="text-xs font-medium text-accent mb-3">{agent.role}</p>
                <p className="text-xs font-semibold text-text-secondary italic mb-3 border-l-2 border-accent/30 pl-3">
                  &ldquo;{agent.tagline}&rdquo;
                </p>
                <p className="text-sm text-text-secondary leading-relaxed flex-1">{agent.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* ROI Calculator */}
      <RoiCalculator />

      {/* Pricing */}
      <Pricing />

      {/* FAQ */}
      <Faq />

      {/* CTA */}
      <CtaSection />
    </>
  )
}
