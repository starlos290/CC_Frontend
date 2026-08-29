'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Work',    href: '#works' },
  { label: 'About',   href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (href: string) => {
    setMobileOpen(false)
    if (href === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/[0.06]' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => go('#')} className="font-heading font-bold text-lg text-white hover:text-amber-400 transition-colors">
          Carlos Courtney
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button key={l.label} onClick={() => go(l.href)}
              className="text-sm text-white/60 hover:text-white transition-colors font-medium">
              {l.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <a href="https://cal.com/metaphase-marketing/15min" target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex btn-primary text-sm !px-5 !py-2.5">
          Book a Call
        </a>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white/70 hover:text-white" onClick={() => setMobileOpen(v => !v)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/[0.08] px-6 pb-6">
            <div className="flex flex-col gap-4 pt-4">
              {links.map(l => (
                <button key={l.label} onClick={() => go(l.href)}
                  className="text-left text-base text-white/70 hover:text-white font-medium">
                  {l.label}
                </button>
              ))}
              <a href="https://cal.com/metaphase-marketing/15min" target="_blank" rel="noopener noreferrer"
                className="btn-primary text-sm mt-2 justify-center">
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
