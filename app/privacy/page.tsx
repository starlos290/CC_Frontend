import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — ClinicClaw',
  description: 'ClinicClaw privacy policy. How we collect, use, and protect your information.',
}

export default function PrivacyPage() {
  const lastUpdated = 'January 1, 2025'

  return (
    <div className="min-h-screen bg-bg-base pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">Legal</p>
          <h1 className="font-sora text-4xl font-bold text-text-primary mb-3">Privacy Policy</h1>
          <p className="text-text-muted text-sm">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-text-secondary leading-relaxed">
          <section>
            <h2 className="font-sora text-xl font-bold text-text-primary mb-4">1. Introduction</h2>
            <p>
              ClinicClaw, operated by Metaphase Marketing (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), provides AI automation software for private healthcare practices. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our platform.
            </p>
            <p className="mt-3">
              For healthcare data processed on behalf of our practice clients, we act as a Business Associate under HIPAA. Each client relationship is governed by a signed Business Associate Agreement (BAA) in addition to this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-sora text-xl font-bold text-text-primary mb-4">2. Information We Collect</h2>
            <p><strong className="text-text-primary">Practice Information:</strong> When you apply or subscribe, we collect your name, practice name, email address, phone number, specialty, and billing information.</p>
            <p className="mt-3"><strong className="text-text-primary">Patient Communication Data:</strong> Our platform processes patient contact information and appointment data on behalf of our practice clients. This data is stored on dedicated private VPS infrastructure assigned exclusively to each practice.</p>
            <p className="mt-3"><strong className="text-text-primary">Usage Data:</strong> We collect information about how our platform is used, including automation performance metrics, message delivery statistics, and system logs.</p>
          </section>

          <section>
            <h2 className="font-sora text-xl font-bold text-text-primary mb-4">3. How We Use Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide, maintain, and improve our platform</li>
              <li>To process patient communications on behalf of practice clients</li>
              <li>To send transactional communications (account confirmations, invoices)</li>
              <li>To provide customer support</li>
              <li>To analyze platform performance and improve our services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-sora text-xl font-bold text-text-primary mb-4">4. Data Security</h2>
            <p>
              We implement industry-standard security measures including AES-256 encryption at rest, TLS 1.3 encryption in transit, role-based access controls, and full audit logging. Each practice&apos;s data resides on a dedicated private VPS with physical and logical isolation from other clients.
            </p>
          </section>

          <section>
            <h2 className="font-sora text-xl font-bold text-text-primary mb-4">5. HIPAA Compliance</h2>
            <p>
              ClinicClaw operates as a Business Associate under HIPAA for all practice clients. We sign a Business Associate Agreement with every client. Patient health information is processed and stored in accordance with HIPAA requirements on dedicated, compliant infrastructure.
            </p>
          </section>

          <section>
            <h2 className="font-sora text-xl font-bold text-text-primary mb-4">6. Data Retention</h2>
            <p>
              We retain practice account data for the duration of the subscription and for a reasonable period following cancellation to allow for account recovery. Patient communication data is retained as specified in your BAA and applicable HIPAA requirements. Upon written request, we will provide a complete data export and confirm deletion.
            </p>
          </section>

          <section>
            <h2 className="font-sora text-xl font-bold text-text-primary mb-4">7. Third-Party Services</h2>
            <p>
              We use select third-party services to operate our platform, including SMS delivery providers operating under HIPAA-eligible agreements, cloud infrastructure providers, and analytics services. All third-party processors are bound by appropriate data processing agreements.
            </p>
          </section>

          <section>
            <h2 className="font-sora text-xl font-bold text-text-primary mb-4">8. Contact Us</h2>
            <p>
              For privacy questions or requests, contact us at:{' '}
              <a href="mailto:privacy@clinicclaw.com" className="text-accent hover:text-accent-dark">
                privacy@clinicclaw.com
              </a>
            </p>
            <p className="mt-2">
              Metaphase Marketing<br />
              ClinicClaw Privacy Officer<br />
              hello@clinicclaw.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
