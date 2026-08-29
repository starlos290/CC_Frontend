import { Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'

const socials = [
  { Icon: Twitter,   href: 'https://twitter.com/carloscourtney',          label: 'X / Twitter' },
  { Icon: Instagram, href: 'https://www.instagram.com/helloimcarlos/',     label: 'Instagram' },
  { Icon: Youtube,   href: 'https://www.youtube.com/c/CarlosCourtney',     label: 'YouTube' },
  { Icon: Linkedin,  href: 'https://www.linkedin.com/in/carloscourtney',   label: 'LinkedIn' },
]

const links = [
  { label: 'Work',    href: '#works' },
  { label: 'About',   href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
  { label: 'Metaphase Marketing', href: 'https://www.metaphasemarketing.com', external: true },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] bg-bg-base py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">

          {/* Brand */}
          <div>
            <p className="font-heading font-bold text-lg text-white mb-1">Carlos Courtney</p>
            <p className="text-white/30 text-sm">CEO, Metaphase Marketing</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-7 gap-y-2">
            {links.map(l => (
              <a key={l.label}
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noopener noreferrer' : undefined}
                className="text-sm text-white/35 hover:text-white/70 transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-amber-400 hover:border-amber-500/30 transition-all duration-200">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.06]">
          <p className="text-white/20 text-xs">© 2026 Carlos Courtney. All rights reserved.</p>
          <p className="text-white/15 text-xs">Built for performance. Designed for growth.</p>
        </div>
      </div>
    </footer>
  )
}
