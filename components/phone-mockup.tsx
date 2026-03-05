'use client'

import { motion } from 'framer-motion'

interface Message {
  from: 'practice' | 'patient'
  text: string
  time?: string
}

interface PhoneMockupProps {
  title?: string
  messages: Message[]
}

export default function PhoneMockup({
  title = 'ClinicClaw AI',
  messages,
}: PhoneMockupProps) {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[290px]">
      {/* Phone shell */}
      <div className="relative rounded-[2.5rem] bg-[#0a0e1a] border-2 border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)] overflow-hidden">
        {/* Notch */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-20 h-5 bg-[#060a12] rounded-full" />
        </div>

        {/* Status bar */}
        <div className="px-5 pb-2 flex items-center justify-between">
          <span className="text-[10px] text-text-secondary font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-2 rounded-sm border border-text-secondary/60 flex items-center pr-0.5">
              <div className="w-[10px] h-[6px] bg-trust rounded-sm" />
            </div>
          </div>
        </div>

        {/* Chat header */}
        <div className="px-4 py-3 border-b border-white/5 flex items-center gap-3 bg-[#0d1424]">
          <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1.5L11 3.75V8.25L7 10.5L3 8.25V3.75L7 1.5Z" stroke="#14b8a6" strokeWidth="1.2" strokeLinejoin="round" />
              <path d="M5 7L6.5 8.5L9.5 5.5" stroke="#14b8a6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-text-primary">{title}</p>
            <p className="text-[10px] text-trust">Active now</p>
          </div>
        </div>

        {/* Messages */}
        <div className="px-3 py-4 space-y-2.5 min-h-[220px] bg-[#080c18]">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.3 }}
              className={`flex ${msg.from === 'practice' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] px-3 py-2 rounded-2xl text-[11px] leading-relaxed ${
                  msg.from === 'practice'
                    ? 'bg-[#121a30] text-text-secondary rounded-tl-sm'
                    : 'bg-accent text-white rounded-tr-sm'
                }`}
              >
                {msg.text}
                {msg.time && (
                  <p className={`text-[9px] mt-1 ${msg.from === 'practice' ? 'text-text-muted' : 'text-white/70'}`}>
                    {msg.time}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input bar */}
        <div className="px-3 py-3 border-t border-white/5 bg-[#0d1424] flex items-center gap-2">
          <div className="flex-1 h-8 bg-white/5 rounded-full" />
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M12 7L2 2L4.5 7L2 12L12 7Z" fill="white" />
            </svg>
          </div>
        </div>

        {/* Home indicator */}
        <div className="flex justify-center py-2 bg-[#080c18]">
          <div className="w-20 h-1 bg-white/20 rounded-full" />
        </div>
      </div>

      {/* Glow */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-accent/20 blur-2xl rounded-full pointer-events-none" />
    </div>
  )
}
