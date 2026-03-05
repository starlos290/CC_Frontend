import type { Metadata } from 'next'
import { Shield, Server, Lock, CheckCircle2, FileText } from 'lucide-react'
import CtaSection from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'HIPAA Compliance — ClinicClaw',
  description:
    'ClinicClaw is built HIPAA-safe from the ground up. Every practice gets a dedicated private VPS, BAA included, encrypted data at rest and in transit.',
}

const pillars = [
  {
    Icon: Server,
    title: 'Dedicated Private VPS',
    description:
      'Every ClinicClaw practice runs on its own dedicated virtual private server. Your patient data never shares infrastructure with any other practice. This is categorically different from multi-tenant cloud services where data intermingles on shared servers.',
    detail: 'Hosted on enterprise-grade infrastructure. SOC 2 compliant data centers. Physical and logical data isolation.',
  },
  {
    Icon: Lock,
    title: 'End-to-End Encryption',
    description:
      'All patient data is encrypted at rest using AES-256 and in transit using TLS 1.3. SMS communications are routed through HIPAA-eligible messaging infrastructure.',
    detail: 'AES-256 encryption at rest. TLS 1.3 in transit. HIPAA-eligible SMS routing.',
  },
  {
    Icon: FileText,
    title: 'Business Associate Agreement (BAA)',
    description:
      'A signed BAA is included with every ClinicClaw plan — Launch, Operate, and Scale. No extra fee, no negotiation required. It\'s in the contract.',
    detail: 'BAA included at no extra cost. HIPAA-compliant data processing terms. Breach notification protocol included.',
  },
  {
    Icon: Shield,
    title: 'Access Controls & Audit Logging',
    description:
      'Role-based access controls limit who can view patient communication data. Full audit logs track every system interaction for compliance review.',
    detail: 'Role-based access controls. Full audit logging. Compliance-ready reporting.',
  },
]

const coverage = [
  'Patient appointment confirmation messages',
  'No-show recovery communications',
  'Post-visit review requests',
  'Patient reactivation outreach',
  'After-hours inquiry responses',
  'Insurance FAQ conversations',
  'New patient welcome sequences',
  'Monthly campaign messages',
]

export default function HipaaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-trust/8 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-dots opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-trust/10 border border-trust/20 rounded-full mb-8">
            <Shield className="w-4 h-4 text-trust" />
            <span className="text-sm font-semibold text-trust">HIPAA Compliance</span>
          </div>
          <h1 className="font-sora text-4xl sm:text-5xl font-bold text-text-primary mb-6 leading-tight">
            Built HIPAA-Safe From the Ground Up
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Every ClinicClaw practice operates on its own dedicated private infrastructure. Your patient data is never on a shared server. BAA included with every plan.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative py-16 bg-[#060a15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map(({ Icon, title, description, detail }) => (
              <div key={title} className="card-base rounded-2xl p-7">
                <div className="w-12 h-12 rounded-xl bg-trust/10 border border-trust/20 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-trust" />
                </div>
                <h3 className="font-sora text-xl font-bold text-text-primary mb-3">{title}</h3>
                <p className="text-text-secondary leading-relaxed mb-5">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {detail.split('. ').map((d) => d.trim()).filter(Boolean).map((d) => (
                    <span
                      key={d}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-trust/8 border border-trust/15 rounded-full text-xs text-trust"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's covered */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-sora text-3xl font-bold text-text-primary mb-4">
              Every Communication is HIPAA-Covered
            </h2>
            <p className="text-text-secondary">
              All 8 automations run within your dedicated HIPAA-compliant environment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {coverage.map((item) => (
              <div key={item} className="flex items-center gap-3 px-4 py-3 card-base rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-trust shrink-0" />
                <span className="text-sm text-text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        headline="HIPAA-Safe AI for Your Practice"
        subhead="Every ClinicClaw plan includes a signed BAA, dedicated private VPS, and full HIPAA-compliant infrastructure. Live in 48 hours."
      />
    </>
  )
}
