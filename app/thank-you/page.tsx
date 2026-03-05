import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Application Received — ClinicClaw',
  description: 'Your ClinicClaw application has been received. Our team will be in touch within 24 hours.',
}

const nextSteps = [
  { step: '1', title: 'Application Review', description: 'Our team reviews your application, typically within a few hours during business days.' },
  { step: '2', title: 'Kickoff Call', description: 'A ClinicClaw deployment specialist reaches out to schedule your 45-minute onboarding kickoff call.' },
  { step: '3', title: 'Custom Configuration', description: 'We configure every automation to your practice standards, message templates, and protocols.' },
  { step: '4', title: 'You Go Live', description: 'Your AI agents are live within 48 hours of your kickoff call. We monitor the first week to ensure everything runs perfectly.' },
]

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center pt-20 pb-16">
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Success icon */}
        <div className="w-20 h-20 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-10 h-10 text-accent" />
        </div>

        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">
          Application Received
        </p>
        <h1 className="font-sora text-4xl sm:text-5xl font-bold text-text-primary mb-5 leading-tight">
          You&apos;re On Your Way to a Fully Automated Practice
        </h1>
        <p className="text-xl text-text-secondary mb-12 leading-relaxed">
          Your application is in. Check your email for a confirmation — we&apos;ll reach out within 24 hours to schedule your kickoff call.
        </p>

        {/* Next steps */}
        <div className="text-left mb-12">
          <h2 className="font-sora text-lg font-bold text-text-primary mb-6 text-center">
            What Happens Next
          </h2>
          <div className="space-y-4">
            {nextSteps.map(({ step, title, description }) => (
              <div key={step} className="flex gap-4 card-base rounded-xl p-5">
                <div className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-accent">{step}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary mb-1">{title}</p>
                  <p className="text-sm text-text-secondary">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Link
            href="/automations"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all shadow-glow"
          >
            Explore the Automations
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-text-primary font-medium rounded-xl border border-white/10 transition-all"
          >
            Back to Home
          </Link>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-text-muted">
          <Shield className="w-3.5 h-3.5 text-trust" />
          <span>HIPAA-safe · BAA included · Dedicated private VPS</span>
        </div>
      </div>
    </div>
  )
}
