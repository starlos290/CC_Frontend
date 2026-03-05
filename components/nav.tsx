'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'

const specialties = [
  { label: 'Chiropractors', href: '/for-chiropractors' },
  { label: 'Med Spas', href: '/for-med-spas' },
  { label: 'Dentists', href: '/for-dentists' },
  { label: 'Dermatologists', href: '/for-dermatologists' },
  { label: 'Physical Therapy', href: '/for-physical-therapy' },
  { label: 'Mental Health', href: '/for-mental-health' },
  { label: 'Orthopedics', href: '/for-orthopedics' },
  { label: 'Plastic Surgery', href: '/for-plastic-surgery' },
  { label: 'Podiatrists', href: '/for-podiatrists' },
  { label: 'Hair Transplant', href: '/for-hair-transplant' },
  { label: 'Laser Hair Removal', href: '/for-laser-hair-removal' },
  { label: 'LASIK', href: '/for-lasik' },
  { label: 'Wellness Centers', href: '/for-wellness-centers' },
  { label: 'Acupuncture', href: '/for-acupuncture' },
]

const navLinks = [
  { label: 'Automations', href: '/automations' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'HIPAA', href: '/hipaa' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080c18]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_0_rgba(255,255,255,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
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

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Specialties dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/5"
              >
                Specialties
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-[#0d1424] border border-white/7 rounded-xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-2 grid grid-cols-2 gap-0.5">
                      {specialties.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                  pathname === link.href
                    ? 'text-text-primary bg-white/5'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/apply"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent hover:bg-accent-dark text-white rounded-lg transition-all duration-200 hover:shadow-glow"
            >
              Apply Now
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#0d1424] border-t border-white/7 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              <div className="pb-2 mb-2 border-b border-white/7">
                <p className="text-xs text-text-muted font-medium uppercase tracking-widest mb-2 px-3">
                  Specialties
                </p>
                <div className="grid grid-cols-2 gap-0.5">
                  {specialties.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-3">
                <Link
                  href="/apply"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium bg-accent hover:bg-accent-dark text-white rounded-lg transition-all"
                >
                  Apply Now
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
