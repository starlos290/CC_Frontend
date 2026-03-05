'use client'

import { useMotionValue, animate, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface InfiniteSliderProps {
  children: React.ReactNode
  gap?: number
  duration?: number
  durationOnHover?: number
  reverse?: boolean
  className?: string
}

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 30,
  durationOnHover,
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration)
  const [width, setWidth] = useState(0)
  const ref = (node: HTMLDivElement | null) => {
    if (node) setWidth(node.offsetWidth)
  }
  const translation = useMotionValue(0)
  const [key, setKey] = useState(0)

  useEffect(() => {
    if (!width) return
    const contentSize = width + gap
    const from = reverse ? -contentSize / 2 : 0
    const to = reverse ? 0 : -contentSize / 2

    const controls = animate(translation, [from, to], {
      ease: 'linear',
      duration: currentDuration,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
      onRepeat: () => translation.set(from),
    })

    return () => controls.stop()
  }, [key, translation, currentDuration, width, gap, reverse])

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => setCurrentDuration(durationOnHover),
        onHoverEnd: () => setCurrentDuration(duration),
      }
    : {}

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        ref={ref}
        className="flex w-max"
        style={{ x: translation, gap: `${gap}px` }}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
