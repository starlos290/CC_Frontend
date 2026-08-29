'use client'

const items = [
  'ALLERGAN',
  'KELLER WILLIAMS',
  'THE GAME CHANGERS',
  'META',
  'GOOGLE',
  'YOUTUBE',
  'TIKTOK',
  'SALESFORCE',
  'ALLERGAN',
  'KELLER WILLIAMS',
  'THE GAME CHANGERS',
  'META',
  'GOOGLE',
  'YOUTUBE',
  'TIKTOK',
  'SALESFORCE',
]

export default function LogoBar() {
  return (
    <section className="py-12 bg-bg-card border-y border-white/[0.04] overflow-hidden">
      <p className="text-center text-xs text-text-muted uppercase tracking-widest mb-8 font-medium">
        Platforms &amp; Partners
      </p>
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-5 mx-8 text-text-muted/60 text-xs font-mono font-semibold tracking-widest uppercase"
            >
              <span className="w-1 h-1 rounded-full bg-accent/40" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
