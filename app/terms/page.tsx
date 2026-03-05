import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — ClinicClaw',
  description: 'ClinicClaw Terms of Service. Terms governing use of the ClinicClaw AI automation platform.',
}

export default function TermsPage() {
  const lastUpdated = 'January 1, 2025'

  return (
    <div className="min-h-screen bg-bg-base pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">Legal</p>
          <h1 className="font-sora text-4xl font-bold text-text-primary mb-3">Terms of Service</h1>
          <p className="text-text-muted text-sm">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-text-secondary leading-relaxed">
          <section>
            <h2 className="font-sora text-xl font-bold text-text-primary mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the ClinicClaw platform, you agree to these Terms of Service. If you are entering into these terms on behalf of a healthcare practice or organization, you represent that you have authority to bind that entity.
            </p>
          </section>

          <section>
            <h2 className="font-sora text-xl font-bold text-text-primary mb-4">2. Services</h2>
            <p>
              ClinicClaw, operated by Metaphase Marketing, provides AI-powered automation software for private healthcare practices, including appointment reminder services, patient communication automation, reputation management tools, and analytics services as described in your selected service tier.
            </p>
          </section>

          <section>
            <h2 className="font-sora text-xl font-bold text-text-primary mb-4">3. Subscription and Billing</h2>
            <p>
              ClinicClaw is offered on a monthly subscription basis with a one-time setup fee. Subscriptions renew automatically unless cancelled with 30 days written notice. Setup fees are non-refundable. Monthly fees are billed in advance.
            </p>
          </section>

          <section>
            <h2 className="font-sora text-xl font-bold text-text-primary mb-4">4. Client Responsibilities</h2>
            <p>You are responsible for:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>Ensuring you have appropriate patient consent for communications</li>
              <li>Providing accurate practice and patient data</li>
              <li>Reviewing and approving all message templates before deployment</li>
              <li>Maintaining appropriate HIPAA policies and procedures at your practice</li>
              <li>Notifying us promptly of any security incidents or suspected data breaches</li>
            </ul>
          </section>

          <section>
            <h2 className="font-sora text-xl font-bold text-text-primary mb-4">5. HIPAA and Business Associate Agreement</h2>
            <p>
              As a Business Associate under HIPAA, ClinicClaw processes Protected Health Information (PHI) on your behalf. A Business Associate Agreement is included with every plan and governs the processing of PHI. Your obligations as a Covered Entity remain your responsibility.
            </p>
          </section>

          <section>
            <h2 className="font-sora text-xl font-bold text-text-primary mb-4">6. Intellectual Property</h2>
            <p>
              The ClinicClaw platform, including all software, algorithms, and automation frameworks, is the intellectual property of Metaphase Marketing. Custom message templates created for your practice remain your property.
            </p>
          </section>

          <section>
            <h2 className="font-sora text-xl font-bold text-text-primary mb-4">7. Limitation of Liability</h2>
            <p>
              ClinicClaw&apos;s liability is limited to the monthly subscription fees paid in the 3 months preceding the claim. We are not liable for indirect, incidental, or consequential damages. Results described in our marketing materials represent averages across our client base and are not guaranteed for any specific practice.
            </p>
          </section>

          <section>
            <h2 className="font-sora text-xl font-bold text-text-primary mb-4">8. Cancellation</h2>
            <p>
              Either party may cancel with 30 days written notice. Upon cancellation, we provide a complete data export and confirm deletion of your data within 30 days. No refunds are provided for partial months.
            </p>
          </section>

          <section>
            <h2 className="font-sora text-xl font-bold text-text-primary mb-4">9. Contact</h2>
            <p>
              For questions about these Terms:{' '}
              <a href="mailto:legal@clinicclaw.com" className="text-accent hover:text-accent-dark">
                legal@clinicclaw.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
