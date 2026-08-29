'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const milestones = [
  {
    year: '2016',
    title: 'The Scientist Who Saw More',
    description:
      'Started in a lab after graduating from ASU with a Microbiology degree. Realized the real opportunity was in human behavior and performance marketing.',
  },
  {
    year: '2017',
    title: 'The Ad Architect',
    description:
      'Went all-in on paid media. First successful campaigns for health clinics and service businesses.',
  },
  {
    year: '2020',
    title: 'Invented Fax Marketing (No, Really)',
    description:
      'While everyone chased digital trends, Carlos brought back fax campaigns for clinics and medical offices. 12M+ faxes sent. $10M+ revenue generated.',
  },
  {
    year: '2023',
    title: 'Metaphase Marketing: Built to Scale',
    description:
      'Founded Metaphase Marketing to bring elite growth systems to ambitious businesses. The agency now manages $30M+ in ad spend annually.',
  },
  {
    year: 'Present',
    title: 'Scaling Businesses to the Moon',
    description:
      'Running Metaphase Marketing full-time. Managing campaigns across Meta, Google, YouTube, and TikTok for clients across healthcare, eCommerce, and B2B.',
  },
]

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="track" className="py-24 bg-bg-elevated" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Career <span className="text-gradient-gold">Milestones</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            The journey from Microbiology labs to managing $30M in ad spend.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[42px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />

          <div className="space-y-10">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className={`relative flex gap-8 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content box */}
                  <div
                    className={`flex-1 ${
                      isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16'
                    } pl-16 md:pl-0`}
                  >
                    <div className="card-base card-hover p-6">
                      <div className="font-heading text-2xl font-extrabold text-accent mb-1">
                        {m.year}
                      </div>
                      <h3 className="font-heading text-lg font-bold text-text-primary mb-2">
                        {m.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>

                  {/* Dot — positioned on the line */}
                  <div
                    className={`absolute ${
                      isLeft
                        ? 'left-[34px] md:left-1/2 md:-translate-x-1/2'
                        : 'left-[34px] md:left-1/2 md:-translate-x-1/2'
                    } top-6 w-4 h-4 rounded-full bg-accent border-4 border-bg-elevated z-10`}
                  />

                  {/* Empty half for desktop layout balance */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
