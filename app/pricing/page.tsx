import type { Metadata } from 'next'
import Pricing from '@/components/pricing'
import Faq from '@/components/faq'
import CtaSection from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Pricing — ClinicClaw',
  description:
    'Transparent, flat-rate pricing for ClinicClaw AI automation. Launch at $297/mo, Operate at $797/mo, Scale custom. No per-message fees. BAA included.',
}

const pricingFaqs = [
  {
    q: 'Are there per-message fees or usage limits?',
    a: 'No. Every plan is flat-rate and unlimited. You pay one monthly fee regardless of how many patients you have or how many messages are sent. No surprises on your invoice.',
  },
  {
    q: 'What does the setup fee cover?',
    a: 'The one-time setup fee covers your dedicated deployment specialist\'s time to configure, customize, and test every automation to your practice standards. It also covers provisioning your private VPS, configuring your BAA, and your onboarding kickoff call. Most practices are live within 48 hours of their kickoff call.',
  },
  {
    q: 'Can I start with Launch and upgrade to Operate later?',
    a: 'Yes. Many practices start with Launch to get comfortable with the system, then upgrade to Operate within the first 2–3 months when they see the ROI. Upgrading requires a pro-rated setup adjustment for the additional automations.',
  },
  {
    q: 'What happens to my data if I cancel?',
    a: 'Your data is yours. We provide a full export of all patient communication history, automation logs, and analytics data upon cancellation. Your dedicated VPS is decommissioned within 30 days. No data is held hostage.',
  },
  {
    q: 'Is the BAA included in the price?',
    a: 'Yes. A Business Associate Agreement is included and signed with every plan — Launch, Operate, and Scale. You don\'t need to negotiate or pay extra for it.',
  },
  {
    q: 'Do you offer discounts for annual payment?',
    a: 'We offer a 10% discount for annual prepayment on Launch and Operate plans. Contact our team to set this up. Scale plans are negotiated individually.',
  },
]

export default function PricingPage() {
  return (
    <>
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4 text-center">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">Pricing</p>
          <h1 className="font-sora text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Predictable Pricing. Unpredictable Results.
          </h1>
          <p className="text-xl text-text-secondary max-w-xl mx-auto">
            One flat monthly rate. No per-message fees. No usage limits. No surprises.
          </p>
        </div>
        <Pricing featured />
      </div>
      <Faq faqs={pricingFaqs} title="Pricing Questions, Answered" />
      <CtaSection />
    </>
  )
}
