import type { Metadata } from 'next'
import SolutionTabs from '@/components/solution-tabs'
import CtaSection from '@/components/cta-section'
import { CheckCircle2, Clock, Star, RefreshCw, MessageSquare, Users, HelpCircle, UserCheck, Megaphone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Automations — ClinicClaw',
  description:
    '8 pre-built, pre-tested healthcare AI automations. Appointment reminders, no-show recovery, Google reviews, patient reactivation, insurance FAQ, and more. HIPAA-safe.',
}

const automationOverview = [
  {
    Icon: MessageSquare,
    name: 'Appointment Reminder Sequences',
    agent: 'Aria',
    stat: '35–40% no-show reduction',
    description: 'Triple-touch SMS sequence at 24h, 2h, and 1h before each appointment.',
  },
  {
    Icon: RefreshCw,
    name: 'No-Show Recovery',
    agent: 'Aria',
    stat: '40% of no-shows rebook',
    description: 'Automatic rebook offer within 10 minutes of a missed appointment.',
  },
  {
    Icon: Star,
    name: 'Google Review Requests',
    agent: 'Vera',
    stat: '3–5x review volume',
    description: 'Personal-feeling review request sent 4 hours after each visit.',
  },
  {
    Icon: UserCheck,
    name: 'Patient Reactivation',
    agent: 'Rex',
    stat: '41% SMS response rate',
    description: 'Re-engages patients 60+ days inactive with personalized outreach.',
  },
  {
    Icon: Clock,
    name: 'After-Hours Patient Response',
    agent: 'Aria',
    stat: '< 10 second response',
    description: 'Instant 24/7 answers to after-hours inquiries, insurance questions, and FAQs.',
  },
  {
    Icon: HelpCircle,
    name: 'Insurance FAQ Responder',
    agent: 'Aria',
    stat: '2hrs/day saved at front desk',
    description: 'Handles your top 20 insurance and practice FAQs automatically.',
  },
  {
    Icon: Users,
    name: 'New Patient Welcome Sequence',
    agent: 'Aria',
    stat: '89% intake form completion',
    description: 'Intake form link, directions, and appointment expectations sent automatically.',
  },
  {
    Icon: Megaphone,
    name: 'Monthly Promo Campaigns',
    agent: 'Sage',
    stat: '28% avg. open rate',
    description: 'Seasonal offers, referral programs, and new service announcements.',
  },
]

export default function AutomationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-accent/7 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-dots opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            8 Automations
          </p>
          <h1 className="font-sora text-4xl sm:text-5xl font-bold text-text-primary mb-5 max-w-3xl mx-auto">
            Every Automation Your Practice Needs, Pre-Built and Ready
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Pre-tested, pre-configured, and deployed to your dedicated private VPS in 48 hours. Your team switches them on — ClinicClaw does the rest.
          </p>
        </div>
      </section>

      {/* Overview grid */}
      <section className="relative py-16 bg-[#060a15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {automationOverview.map(({ Icon, name, agent, stat, description }) => (
              <div
                key={name}
                className="card-base card-hover rounded-2xl p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
                  {agent} Agent
                </p>
                <h3 className="font-sora text-sm font-bold text-text-primary mb-2 leading-tight">
                  {name}
                </h3>
                <p className="text-xs text-text-secondary mb-3 leading-relaxed">{description}</p>
                <div className="flex items-center gap-1.5 mt-auto">
                  <CheckCircle2 className="w-3.5 h-3.5 text-trust shrink-0" />
                  <span className="text-xs font-semibold text-trust">{stat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive demo */}
      <SolutionTabs />

      <CtaSection
        headline="Ready to Run All 8 Automations?"
        subhead="Apply today and your full automation suite goes live within 48 hours. No IT, no contracts, full HIPAA compliance."
      />
    </>
  )
}
