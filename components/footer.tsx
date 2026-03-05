import Link from 'next/link'
import { Shield, Mail, Building2 } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Automations', href: '/automations' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'HIPAA Compliance', href: '/hipaa' },
    { label: 'Apply Now', href: '/apply' },
  ],
  Specialties: [
    { label: 'Chiropractors', href: '/for-chiropractors' },
    { label: 'Med Spas', href: '/for-med-spas' },
    { label: 'Dentists', href: '/for-dentists' },
    { label: 'Physical Therapy', href: '/for-physical-therapy' },
    { label: 'Mental Health', href: '/for-mental-health' },
    { label: 'Orthopedics', href: '/for-orthopedics' },
  ],
  'More Specialties': [
    { label: 'Dermatologists', href: '/for-dermatologists' },
    { label: 'Plastic Surgery', href: '/for-plastic-surgery' },
    { label: 'Podiatrists', href: '/for-podiatrists' },
    { label: 'LASIK', href: '/for-lasik' },
    { label: 'Wellness Centers', href: '/for-wellness-centers' },
    { label: 'Acupuncture', href: '/for-acupuncture' },
  ],
  Company: [
    { label: 'Blog', href: '/blog' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#060a15] border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 2L14.5 5.25V11.75L9 15L3.5 11.75V5.25L9 2Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.5 9L8 10.5L11.5 7"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-sora font-700 text-lg text-text-primary tracking-tight">
                Clinic<span className="text-accent">Claw</span>
              </span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed mb-5">
              Your 24/7 AI employee for private healthcare practices. HIPAA-safe, deployed in 48 hours.
            </p>
            <div className="flex items-center gap-2 text-xs text-trust">
              <Shield className="w-3.5 h-3.5 shrink-0" />
              <span>HIPAA-Safe — BAA Included</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-text-muted mt-2">
              <Building2 className="w-3.5 h-3.5 shrink-0" />
              <span>By Metaphase Marketing</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-text-muted mt-2">
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <a
                href="mailto:hello@clinicclaw.com"
                className="hover:text-accent transition-colors"
              >
                hello@clinicclaw.com
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold text-text-primary uppercase tracking-widest mb-4">
                {group}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} ClinicClaw by Metaphase Marketing. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-text-muted hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-text-muted hover:text-accent transition-colors">
              Terms
            </Link>
            <Link href="/hipaa" className="text-xs text-text-muted hover:text-accent transition-colors">
              HIPAA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
